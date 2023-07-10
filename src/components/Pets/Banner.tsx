import Button from '../Button';

import { ReactComponent as IconPlay } from '~/assets/images/svg/ico-play.svg';
import { ReactComponent as IconPlayMo } from '~/assets/images/svg/ico-play-mo.svg';
import ImgBanner from '~/assets/images/img-pets-banner@2x.png';
import useWindowSize from '~/hooks/useWindowSize';

function Banner() {
	const [windowWidth] = useWindowSize();
	return (
		<section className="section section--banner">
			<div className="banner">
				<div className="banner__info">
					<h2 className="banner__title">One more friend</h2>
					<strong className="banner__title-sub">Thousands more fun!</strong>
					<p className="banner__desc">
						Having a pet means you have more joy, a new friend, a happy person
						who will always be with you to have fun. We have 200+ different pets
						that can meet your needs!
					</p>
					<div className="btn-area">
						<Button
							text="View Intro"
							iconPosition="left"
							buttonType="outline"
							className="btn--view"
						>
							{windowWidth > 828 ? <IconPlay /> : <IconPlayMo />}
						</Button>
						<Button text="Explore Now" className="btn--explore" />
					</div>
				</div>
				<div className="banner__img">
					<img src={ImgBanner} alt="" />
				</div>
			</div>
		</section>
	);
}
export default Banner;
