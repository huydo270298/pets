import { useEffect, useRef, useState } from 'react';
import classname from 'classnames';
import { AnyNsRecord } from 'dns';
import useWindowSize from '~/hooks/useWindowSize';
import Checkbox, { SizeType } from './Checkbox';
import { ReactComponent as IconFilter } from '~/assets/images/svg/ico-filter.svg';

export interface FormDataType {
	gender: string[];
	color: string[];
	size: string[];
}
interface FilterPropType {
	onSubmit: (data: FormDataType) => void;
}

function Filter({ onSubmit }: FilterPropType) {
	const [windowWidth] = useWindowSize();
	const [filter, setFilter] = useState(false);

	const handleClickFilter = () => {
		setFilter(!filter);
	};

	const data = useRef<FormDataType>({
		gender: [],
		color: [],
		size: [],
	});

	const handleSizeSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const arrSize: string[] = [];

		e.target.size?.forEach((sizeItem: HTMLInputElement) => {
			if (sizeItem.checked) {
				arrSize.push(sizeItem.value);
			}
		});
		data.current.size = arrSize;
		onSubmit(data.current);
	};

	const handleColorSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const arrColor: string[] = [];

		e.target.color?.forEach((colorItem: HTMLInputElement) => {
			if (colorItem.checked) {
				arrColor.push(colorItem.value);
			}
		});
		data.current.color = arrColor;
		onSubmit(data.current);
	};

	const handleGenderSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const arrGender: string[] = [];

		e.target.gender?.forEach((genderItem: HTMLInputElement) => {
			if (genderItem.checked) {
				arrGender.push(genderItem.value);
			}
		});
		data.current.gender = arrGender;
		onSubmit(data.current);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.form?.requestSubmit();
	};

	return (
		<div className={classname('filter', filter && 'is-open')}>
			{windowWidth > 1220 ? (
				<>
					<h3 className="filter__title">Filter</h3>
					<div className="filter__content">
						<div className="filter-box">
							<strong className="filter-box__title">Gender</strong>
							<form action="" onSubmit={handleGenderSubmit}>
								<ul className="filter-box__list">
									<li className="filter-box__item">
										<Checkbox
											id="male"
											label="Male"
											name="gender"
											onChange={handleChange}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="female"
											label="Female"
											name="gender"
											onChange={handleChange}
										/>
									</li>
								</ul>
							</form>
						</div>
						<div className="filter-box filter-box--color">
							<strong className="filter-box__title">Color</strong>
							<form action="" onSubmit={handleColorSubmit}>
								<ul className="filter-box__list">
									<li className="filter-box__item">
										<Checkbox
											id="red"
											name="color"
											label={
												<>
													<span className="color color--red" />
													Red
												</>
											}
											onChange={handleChange}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="apricot"
											name="color"
											label={
												<>
													<span className="color color--apricot" />
													Apricot
												</>
											}
											onChange={handleChange}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="black"
											name="color"
											label={
												<>
													<span className="color color--black" />
													Black
												</>
											}
											onChange={handleChange}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="black-white"
											name="color"
											label={
												<>
													<span className="color color--black-white" />
													Black &amp; White
												</>
											}
											onChange={handleChange}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="silver"
											name="color"
											label={
												<>
													<span className="color color--silver" />
													Silver
												</>
											}
											onChange={handleChange}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="tan"
											name="color"
											label={
												<>
													<span className="color color--tan" />
													Tan
												</>
											}
											onChange={handleChange}
										/>
									</li>
								</ul>
							</form>
						</div>
						<div className="filter-box filter-box--price">
							<strong className="filter-box__title">Price</strong>
							<ul className="filter-box__list">
								<li className="filter-box__item">
									<input
										type="number"
										className="inp-price"
										placeholder="Min"
									/>
								</li>
								<li className="filter-box__item">
									<input
										type="number"
										className="inp-price"
										placeholder="Max"
									/>
								</li>
							</ul>
						</div>
						<div className="filter-box filter-box--size">
							<strong className="filter-box__title">Breed</strong>
							<form action="" onSubmit={handleSizeSubmit}>
								<ul className="filter-box__list">
									<li className="filter-box__item">
										<Checkbox
											id="small"
											label="Small"
											name="size"
											onChange={handleChange}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="medium"
											label="Medium"
											name="size"
											onChange={handleChange}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="large"
											label="Large"
											name="size"
											onChange={handleChange}
										/>
									</li>
								</ul>
							</form>
						</div>
					</div>
				</>
			) : (
				<>
					<button
						type="button"
						className="btn_filter"
						onClick={handleClickFilter}
					>
						<IconFilter />
						Filter
					</button>
					{filter && (
						<div className="filter__content">
							<div className="filter-box">
								<strong className="filter-box__title">Gender</strong>
								<ul className="filter-box__list">
									<li className="filter-box__item">
										<Checkbox id="male" label="Male" name="genre" />
									</li>
									<li className="filter-box__item">
										<Checkbox id="female" label="Female" name="genre" />
									</li>
								</ul>
							</div>
							<div className="filter-box filter-box--color">
								<strong className="filter-box__title">Color</strong>
								<ul className="filter-box__list">
									<li className="filter-box__item">
										<span />
										<Checkbox
											id="red"
											name="color"
											label={
												<>
													<span className="color color--red" />
													Red
												</>
											}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="apricot"
											name="color"
											label={
												<>
													<span className="color color--apricot" />
													Apricot
												</>
											}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="black"
											name="color"
											label={
												<>
													<span className="color color--black" />
													Black
												</>
											}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="black-white"
											name="color"
											label={
												<>
													<span className="color color--black-white" />
													Black &amp; White
												</>
											}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="silver"
											name="color"
											label={
												<>
													<span className="color color--silver" />
													Silver
												</>
											}
										/>
									</li>
									<li className="filter-box__item">
										<Checkbox
											id="tan"
											name="color"
											label={
												<>
													<span className="color color--tan" />
													Tan
												</>
											}
										/>
									</li>
								</ul>
							</div>
							<div className="filter-box filter-box--price">
								<strong className="filter-box__title">Price</strong>
								<ul className="filter-box__list">
									<li className="filter-box__item">
										<input
											type="number"
											className="inp-price"
											placeholder="Min"
										/>
									</li>
									<li className="filter-box__item">
										<input
											type="number"
											className="inp-price"
											placeholder="Max"
										/>
									</li>
								</ul>
							</div>
							<div className="filter-box">
								<strong className="filter-box__title">Breed</strong>
								<ul className="filter-box__list">
									<li className="filter-box__item">
										<Checkbox id="small" label="Small" name="size" />
									</li>
									<li className="filter-box__item">
										<Checkbox id="Medium" label="Medium" name="size" />
									</li>
									<li className="filter-box__item">
										<Checkbox id="large" label="Large" name="size" />
									</li>
								</ul>
							</div>
						</div>
					)}
				</>
			)}
		</div>
	);
}
export default Filter;
