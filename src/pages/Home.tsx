import { Link } from 'react-router-dom';
import { QueryFunctionContext, useQueries } from '@tanstack/react-query';
import axios from 'axios';
import Button from '~/components/Button';
import CardPets from '~/components/CardPets';
import useWindowSize from '~/hooks/useWindowSize';

import { ReactComponent as IconPlay } from '~/assets/images/svg/ico-play.svg';
import { ReactComponent as IconArrowRight } from '~/assets/images/svg/ico-arrow-right.svg';
import { ReactComponent as IconPets } from '~/assets/images/svg/ico-fontisto-paw.svg';

import logoSheba from '~/assets/images/logo-sheba.png';
import logoWhiskas from '~/assets/images/logo-whiskas.png';
import logoBakers from '~/assets/images/logo-bakers.png';
import logoFelix from '~/assets/images/logo-felix.png';
import logoGoodboy from '~/assets/images/logo-goodboy.png';
import logoButchers from '~/assets/images/logo-butchers.png';
import logoPedigree from '~/assets/images/logo-pedigree.png';
import CardBlogs from '~/components/CardBlogs';
import CardProducts from '~/components/CardProducts';
import StorageKeys from '~/constants/StorageKeys';

function Home() {
	const [windowWidth] = useWindowSize();

	const fetchApi = async ({
		queryKey,
	}: QueryFunctionContext<[string, string | null | undefined, number]>) => {
		const respons = await axios.get(
			`${StorageKeys.API_ENDPOINT}${queryKey[1]}?_limit=${queryKey[2]}`
		);

		return respons.data;
	};

	const fetchPetNew = async () => {
		const respons = await axios.get(
			`${StorageKeys.API_ENDPOINT}pets?_limit=8&new=true`
		);

		return respons.data;
	};

	const result = useQueries({
		queries: [
			{
				queryKey: ['getPetNew'],
				queryFn: fetchPetNew,
				staleTime: Infinity,
			},
			{
				queryKey: ['getProducts', 'products', 8],
				queryFn: fetchApi,
				staleTime: Infinity,
			},
			{
				queryKey: ['getBlogs', 'blogs', 3],
				queryFn: fetchApi,
				staleTime: Infinity,
			},
		],
	});

	return (
		<main className="content content--main">
			<section className="section section--spot">
				<div className="inner">
					<div className="info">
						<h2 className="title">One More Friend</h2>
						<h3 className="title-sub">Thousands More Fun!</h3>
						<p className="desc">
							Having a pet means you have more joy, a new friend, a happy person
							who will always be with you to have fun. We have 200+ different
							pets that can meet your needs!
						</p>
						<div className="group-btn">
							<Button
								text="View Intro"
								iconPosition="left"
								buttonType="outline"
							>
								<IconPlay />
							</Button>

							<Button text="Explore Now" />
						</div>
					</div>
				</div>
			</section>
			<section className="section section--space">
				<div className="inner">
					<div className="group-title">
						<h3 className="title">Take A Look At Some Of Our Pets</h3>
						<span className="title-sub">Whats new?</span>
					</div>
					<CardPets data={result[0].data?.data} />
					<Button
						text="View more"
						iconPosition="left"
						buttonType="outline"
						className="btn-more"
						size="small"
					>
						<IconArrowRight />
					</Button>
				</div>
			</section>
			<section className="section">
				<div className="inner">
					<div className="banner banner--right">
						<div className="info">
							<h2 className="title">One More Friend</h2>
							<h3 className="title-sub">Thousands More Fun!</h3>
							<p className="desc">
								Having a pet means you have more joy, a new friend, a happy
								person who will always be with you to have fun. We have 200+
								different pets that can meet your needs!
							</p>
							<div className="group-btn">
								<Button
									text="View Intro"
									iconPosition="left"
									buttonType="outline"
								>
									<IconPlay />
								</Button>
								<Button text="Explore Now" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{windowWidth > 828 && (
				<>
					<section className="section section--space">
						<div className="inner">
							<div className="group-title">
								<h3 className="title">Our Products</h3>
								<span className="title-sub">
									Hard to choose right products for your pets?
								</span>
							</div>
							<CardProducts data={result[1].data?.data} />
							<Button
								text="View more"
								iconPosition="left"
								buttonType="outline"
								className="btn-more"
								size="small"
							>
								<IconArrowRight />
							</Button>
						</div>
					</section>
					<section className="section section--kinds section--space">
						<div className="inner">
							<div className="group-title">
								<h3 className="title">
									Proud to be part of <strong>Pet Sellers</strong>
								</h3>
								<Button
									text="View all our sellers"
									iconPosition="left"
									buttonType="outline"
								>
									<IconArrowRight />
								</Button>
							</div>
							<div className="kinds">
								<ul className="kinds__list">
									<li className="kinds__item">
										<Link className="kinds__link" to="#none" title="Sheba">
											<img src={logoSheba} alt="" />
										</Link>
									</li>
									<li className="kinds__item">
										<Link className="kinds__link" to="#none" title="Whiskas">
											<img src={logoWhiskas} alt="" />
										</Link>
									</li>
									<li className="kinds__item">
										<Link className="kinds__link" to="#none" title="Bakers">
											<img src={logoBakers} alt="" />
										</Link>
									</li>
									<li className="kinds__item">
										<Link className="kinds__link" to="#none" title="Felix">
											<img src={logoFelix} alt="" />
										</Link>
									</li>
									<li className="kinds__item">
										<Link className="kinds__link" to="#none" title="Goodboy">
											<img src={logoGoodboy} alt="" />
										</Link>
									</li>
									<li className="kinds__item">
										<Link className="kinds__link" to="#none" title="Butchers">
											<img src={logoButchers} alt="" />
										</Link>
									</li>
									<li className="kinds__item">
										<Link className="kinds__link" to="#none" title="Pedigree">
											<img src={logoPedigree} alt="" />
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</section>
					<section className="section">
						<div className="inner">
							<div className="banner banner--type2">
								<div className="info">
									<h2 className="title">
										Adoption <IconPets />
									</h2>
									<h3 className="title-sub">We Need Help. So Do They.</h3>
									<p className="desc">
										Adopt a pet and give it a home,
										<br /> it will be love you back unconditionally.
									</p>
									<div className="group-btn">
										<Button text="Explore Now" />
										<Button
											text="View Intro"
											iconPosition="left"
											buttonType="outline"
										>
											<IconPlay />
										</Button>
									</div>
								</div>
							</div>
						</div>
					</section>
				</>
			)}
			<section className="section section--space">
				<div className="inner">
					<div className="group-title">
						<h3 className="title">Useful pet knowledge</h3>
						<span className="title-sub">You already know ?</span>
					</div>
					<CardBlogs data={result[2].data?.data} />
					<Button
						text="View more"
						iconPosition="left"
						buttonType="outline"
						className="btn-more"
						size="small"
					>
						<IconArrowRight />
					</Button>
				</div>
			</section>
		</main>
	);
}

export default Home;
