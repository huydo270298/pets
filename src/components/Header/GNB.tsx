/* eslint-disable react/no-array-index-key */
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { ReactComponent as IconArrowRight } from '~/assets/images/svg/ico-arrow-right2.svg';
import srcMenuImg from '~/assets/images/img-spot-menu.jpg';

const gnb = [
	{
		title: 'Home',
		link: '/',
	},
	{
		title: 'Category',
		link: '',
		sub: [
			{
				id: 1,
				name: 'Popular',
				category: 'popular',
				data: [
					'yorkshire terrier',
					'samoyed',
					'pug',
					'labrador',
					'cocker spaniel',
					'tosa',
					'jack russell terrier',
					'dachshund',
					'beagle',
					'french bulldog',
					'husky',
					'chihuahua',
				],
			},
			{
				id: 2,
				name: 'Large Dog',
				category: 'large',
				data: [
					'akita',
					'alaskan malamute',
					'berbese moutain',
					'bloodhound',
					'bullmastiff',
					'cane corso',
				],
			},
			{
				id: 3,
				name: 'Small Dog',
				category: 'small',
				data: [
					'beagle',
					'boston terrier',
					'calm terrier',
					'chihuahua',
					'cocker spaniel',
					'dachshund',
				],
			},
		],
	},
	{
		title: 'Pets',
		link: '/pets',
	},
];

function GNB() {
	return (
		<nav className="gnb">
			<ul className="gnb__list">
				{gnb.map((item, index) => {
					return (
						<li
							className={classNames('gnb__item', item.sub && 'gnb__item--sub')}
							key={index}
						>
							{item.title !== 'Category' ? (
								<NavLink
									to={item.link}
									className={({ isActive }) =>
										isActive ? 'gnb__link is_active' : 'gnb__link'
									}
								>
									{item.title}
								</NavLink>
							) : (
								<>
									<span key={index} className="gnb__link">
										{item.title}
									</span>
									<div className="menu">
										<ul className="menu__list">
											{item.sub?.map((sub) => (
												<li className="menu__item" key={sub.id}>
													<Link
														to={`/pets?detail.size=${sub.category}`}
														className="menu__title"
													>
														{sub.name}
														<IconArrowRight className="ico" />
													</Link>
													<ul
														className={classNames(
															'sub-menu',
															sub.data.length > 6 && 'sub-menu--type2'
														)}
													>
														{sub.data.map((subItem) => (
															<li key={subItem} className="sub-menu__item">
																<Link
																	to={`/pets?puppies=${subItem}`}
																	className="sub-menu__link"
																>
																	{subItem}
																</Link>
															</li>
														))}
													</ul>
												</li>
											))}
										</ul>
										<div className="menu__img">
											<img src={srcMenuImg} alt="" />
										</div>
									</div>
								</>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export default GNB;
