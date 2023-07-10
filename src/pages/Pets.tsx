/* eslint-disable no-underscore-dangle */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

import { useState } from 'react';
import BreadCrumb from '~/components/Breadcrumb';
import CardPets from '~/components/CardPets';
import Dropdown from '~/components/Dropdown';
import Filter, { FormDataType } from '~/components/Filter';
import Pagination from '~/components/Pagination';
import Banner from '~/components/Pets/Banner';
import StorageKeys from '~/constants/StorageKeys';
import SkeletonCardPet from '~/components/SkeletonItem';

interface FilterType {
	page?: number;
	order?: 'default' | 'asc' | 'desc';
	size?: string[];
	color?: string[];
	gender?: string[];
}

export const arrayOrder = [
	{
		text: 'Popular',
		data: 'default',
	},
	{
		text: 'Ascending',
		data: 'asc',
	},
	{
		text: 'Decrease',
		data: 'desc',
	},
];

function Pets() {
	const limit = 1;
	const navigate = useNavigate();
	const location = useLocation();

	const queryParams = queryString.parse(
		location.search.slice(1, location.search.length)
	);

	const filterSearch = ({ page, order, size, color, gender }: FilterType) => {
		if (page) queryParams._page = page.toString();
		if (order) queryParams._order = order;
		if (size) queryParams['detail.size'] = size;
		if (color) queryParams['detail.color'] = color;
		if (gender) queryParams['detail.gender'] = gender;

		navigate({
			pathname: location.pathname,
			search: queryString.stringify(queryParams),
		});
	};

	const [sort, setSort] = useState('id');
	const changeOrder = (value: 'default' | 'asc' | 'desc') => {
		if (value === 'default') {
			filterSearch({ order: value });
			setSort('id');
		} else {
			filterSearch({ order: value });
			setSort('price');
		}
	};

	const onSubmit = (value: FormDataType) => {
		filterSearch({
			gender: value.gender,
			color: value.color,
			size: value.size,
		});
	};

	const fetchApi = async () => {
		const respons = await axios.get(`${StorageKeys.API_ENDPOINT}pets`, {
			params: {
				...queryParams,
				_page: queryParams._page || 1,
				_limit: limit,
				_sort: sort,
			},
		});
		return respons.data;
	};

	const { data, isLoading, isSuccess, isError } = useQuery({
		queryKey: [
			'filter pet',
			{
				page: Number(queryParams._page) || 1,
				order: queryParams._order || 'default',
				color: queryParams['detail.color'] || 'all',
				gender: queryParams['detail.gender'] || 'all',
				size: queryParams['detail.size'] || 'all',
				sort,
			},
		],
		queryFn: fetchApi,
		keepPreviousData: true,
	});

	return (
		<main className="content content--pets">
			<div className="inner">
				<BreadCrumb />
				<Banner />
				<section className="section section--petlist">
					<Filter onSubmit={onSubmit} />
					<div className="petlist">
						<div className="petlist-head">
							<h3 className="petlist-head__title">
								Small Dog
								<span className="result">{data?.total} puppies</span>
							</h3>
							<div className="select">
								<Dropdown
									arrayData={arrayOrder}
									parentClassName="dropdown--sort"
									onChange={changeOrder}
								/>
							</div>
						</div>
						<div className="petlist__content">
							{(isLoading || isError) && (
								<div className="card">
									<ul className="card__list">
										{Array(limit)
											.fill(0)
											.map((item, index) => {
												return (
													// eslint-disable-next-line react/no-array-index-key
													<li className="card__item" key={index}>
														<SkeletonCardPet />
													</li>
												);
											})}
									</ul>
								</div>
							)}
							{isSuccess && (
								<>
									<CardPets data={data?.data} />
									{data && (
										<Pagination
											currentPage={Number(queryParams._page) || 1}
											changePage={filterSearch}
											upperPageBound={limit}
											totalItem={data?.total}
										/>
									)}
								</>
							)}
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}

export default Pets;
