import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
import { useState } from 'react';

import { useQueries, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { useParams } from 'react-router-dom';

import cx from 'classnames';
import { ReactComponent as IconChart } from '~/assets/images/svg/ico-chart.svg';
import { ReactComponent as IconPrev } from '~/assets/images/svg/btn-prev.svg';
import { ReactComponent as IconNext } from '~/assets/images/svg/btn-next.svg';
import { ReactComponent as IconHealth } from '~/assets/images/svg/ico-health-pets.svg';
import { ReactComponent as IconIdentifi } from '~/assets/images/svg/ico-identifi-pets.svg';
import { ReactComponent as IconShare } from '~/assets/images/svg/ico-share.svg';

import BreadCrumb from '~/components/Breadcrumb';
import Button from '~/components/Button';
import CardPets from '~/components/CardPets';
import useWindowSize from '~/hooks/useWindowSize';
import { fomartCurrency, upperCaseFirst } from '~/utils/synthetic';
import ShareSocial from '~/components/ShareSocial';
import StorageKeys from '~/constants/StorageKeys';
import SkeletonCardPet, {
	SkeletonCardDetail,
	SkeletonCardDetailCustomer,
} from '~/components/SkeletonItem';

interface ContextType {
	queryKey: string[];
}

function Detail() {
	const [windowWidth] = useWindowSize();
	const params = useParams();

	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

	const fetchApi = async () => {
		const respons = await axios.get(
			`${StorageKeys.API_ENDPOINT}pets/${params.id}`
		);
		return respons.data;
	};

	const fetchApiCustomer = async () => {
		const respons = await axios.get(`${StorageKeys.API_ENDPOINT}customers`);
		return respons.data;
	};

	const fetchApiPuppies = async (context: ContextType) => {
		const respons = await axios.get(
			`${StorageKeys.API_ENDPOINT}pets?puppies=${context.queryKey[1]}&_limit=4`
		);
		return respons.data;
	};

	const result = useQueries({
		queries: [
			{
				queryKey: ['dog related', 'pet'],
				queryFn: fetchApi,
			},
			{
				queryKey: ['customer'],
				queryFn: fetchApiCustomer,
			},
		],
	});

	const petInfo = result[0].data?.detail;
	const puppies = result[0].data?.puppies;

	const puppiesList = useQuery({
		queryKey: ['puppiesList', puppies],
		queryFn: fetchApiPuppies,
	});

	return (
		<main className="content content--pet-detail">
			<div className="inner">
				<section
					className={cx(
						`section section--info ${
							(result[0].isLoading || result[0].isError) && 'skleton'
						}`
					)}
				>
					{(result[0].isLoading || result[0].isError) && <SkeletonCardDetail />}
					{result[0].isSuccess && (
						<>
							<div className="image">
								<Swiper
									spaceBetween={10}
									navigation={{
										prevEl: '.btn-prev',
										nextEl: '.btn-next',
									}}
									thumbs={{
										swiper:
											thumbsSwiper && !thumbsSwiper.destroyed
												? thumbsSwiper
												: null,
									}}
									modules={[FreeMode, Navigation, Thumbs]}
									className="swiper swiper-big"
								>
									{result[0].data?.thumb.map((item: string, index: number) => (
										// eslint-disable-next-line react/no-array-index-key
										<SwiperSlide key={index}>
											<img src={item} alt="" />
										</SwiperSlide>
									))}
									<button type="button" className="btn-prev">
										<IconPrev />
									</button>
									<button type="button" className="btn-next">
										<IconNext />
									</button>
								</Swiper>
								<Swiper
									onSwiper={setThumbsSwiper}
									spaceBetween={windowWidth > 828 ? 12 : 9}
									slidesPerView="auto"
									freeMode
									watchSlidesProgress
									modules={[FreeMode, Thumbs]}
									className="swiper swiper-small"
								>
									{result[0].data?.thumb.map((item: string, index: number) => (
										// eslint-disable-next-line react/no-array-index-key
										<SwiperSlide key={index}>
											<img src={item} alt="" />
										</SwiperSlide>
									))}
								</Swiper>
								{windowWidth > 828 && (
									<>
										<div className="commitment">
											<strong className="commitment__item">
												<IconHealth />
												100% health guarantee for pets
											</strong>
											<strong className="commitment__item">
												<IconIdentifi />
												100% guarantee of pet identification
											</strong>
										</div>
										<div className="share">
											<strong className="share__title">
												<IconShare />
												Share:
											</strong>
											<ShareSocial />
										</div>
									</>
								)}
							</div>
							<div className="info">
								<BreadCrumb />
								<div className="info-detail">
									<span className="info-detail__id">
										SKU {result[0].data?.detail.SKU}
									</span>
									<strong className="info-detail__name">
										{result[0].data?.name}
									</strong>
									<strong className="info-detail__price">
										{fomartCurrency(result[0].data?.price)} VND
									</strong>
								</div>
								<div className="btn_area">
									<Button text="Contact us" />
									<Button
										buttonType="outline"
										text="Chat with Monito"
										iconPosition="right"
									>
										<IconChart />
									</Button>
								</div>
								{windowWidth <= 828 && (
									<div className="info-detail__share">
										<strong className="title">Information</strong>
										<div className="share">
											<button className="share__title">
												<IconShare />
												Share
											</button>
											<ShareSocial />
										</div>
									</div>
								)}
								<table className="info-table">
									<caption>{result[0].data?.name}</caption>
									<colgroup>
										<col style={{ width: '194px' }} />
										<col />
									</colgroup>
									{petInfo && (
										<tbody>
											<tr>
												<th>SKU</th>
												<td>{petInfo.SKU}</td>
											</tr>
											<tr>
												<th>Gender</th>
												<td>{upperCaseFirst(petInfo.gender)}</td>
											</tr>
											<tr>
												<th>Age</th>
												<td>{petInfo.age}</td>
											</tr>
											<tr>
												<th>Size</th>
												<td>{upperCaseFirst(petInfo.size)}</td>
											</tr>
											<tr>
												<th>Color</th>
												<td>{petInfo.color}</td>
											</tr>
											<tr>
												<th>Vaccinated</th>
												<td>{petInfo.vaccinated ? 'Yes' : 'No'}</td>
											</tr>
											<tr>
												<th>Dewormed</th>
												<td>{petInfo.dewormed ? 'Yes' : 'No'}</td>
											</tr>
											<tr>
												<th>Cert</th>
												<td>{petInfo.cert ? `Yes (${petInfo.cert})` : 'No'}</td>
											</tr>
											<tr>
												<th>Microchip</th>
												<td>{petInfo.microchip ? 'Yes' : 'No'}</td>
											</tr>
											<tr>
												<th>Location</th>
												<td>{petInfo.location}</td>
											</tr>
											<tr>
												<th>Published Date</th>
												<td>{petInfo.published}</td>
											</tr>
											<tr>
												<th>Additional Information</th>
												<td
													// eslint-disable-next-line react/no-danger
													dangerouslySetInnerHTML={{
														__html: DOMPurify.sanitize(petInfo?.information),
													}}
												/>
											</tr>
										</tbody>
									)}
								</table>
							</div>
							{windowWidth <= 828 && (
								<div className="commitment">
									<strong className="commitment__item">
										<IconHealth />
										100% health guarantee for pets
									</strong>
									<strong className="commitment__item">
										<IconIdentifi />
										100% guarantee of pet identification
									</strong>
								</div>
							)}
						</>
					)}
				</section>
				<section
					className={cx(
						`section section--customer ${
							(result[0].isLoading || result[0].isError) && 'skleton'
						}`
					)}
				>
					<h2 className="section--customer__title">Our lovely customer</h2>
					{(result[1].isLoading || puppiesList.isError) && (
						<SkeletonCardDetailCustomer />
					)}
					{result[1].isSuccess && (
						<Swiper
							className="swiper swiper-customer"
							spaceBetween={12}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination]}
							slidesPerView="auto"
						>
							{result[1].data?.map((item: string, index: number) => {
								return (
									// eslint-disable-next-line react/no-array-index-key
									<SwiperSlide key={index}>
										<img src={item} alt="" />
									</SwiperSlide>
								);
							})}
						</Swiper>
					)}
				</section>
				<section className="section section--news">
					<span className="section--news__title-sub">Whats new?</span>
					<strong className="section--news__title">See more puppies</strong>

					{(puppiesList.isLoading || puppiesList.isError) && (
						<div className="card">
							<ul className="card__list">
								{Array(4)
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
					{puppiesList.isSuccess && <CardPets data={puppiesList.data?.data} />}
				</section>
			</div>
		</main>
	);
}

export default Detail;
