import { Link } from 'react-router-dom';
import Button from './Button';
import { ReactComponent as IconFacebook } from '~/assets/images/svg/ico-facebook.svg';
import { ReactComponent as IconTwitter } from '~/assets/images/svg/ico-twitter.svg';
import { ReactComponent as IconInstagram } from '~/assets/images/svg/ico-instagram.svg';
import { ReactComponent as IconYoutube } from '~/assets/images/svg/ico-youtube.svg';
import { ReactComponent as Logo } from '~/assets/images/logo.svg';

function Footer() {
	return (
		<footer className="footer">
			<div className="inner">
				<div className="search">
					<strong className="search__title">
						Register now so you don&#8216;t miss our programs
					</strong>
					<form className="search__form">
						<div className="input-box">
							<div className="input-box__group">
								<input type="text" className="input" />
							</div>
						</div>
						<Button
							type="submit"
							className="search__submit"
							text="Subcribe Now"
							onClick={(e) => e.preventDefault()}
						/>
					</form>
				</div>
				<div className="nav">
					<ul className="nav__list">
						<li className="nav__item">
							<Link to="/" className="nav__link" title="Home">
								Home
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/category" className="nav__link" title="Category">
								category
							</Link>
						</li>
						<li className="nav__item">
							<Link to="/pets" className="nav__link" title="Pets">
								Pets
							</Link>
						</li>
					</ul>
					<ul className="nav__list nav__list--sns">
						<li className="nav__item">
							<a
								href="#none"
								target="_blank"
								className="nav__link"
								title="Facebook"
							>
								<IconFacebook />
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#none"
								target="_blank"
								className="nav__link"
								title="Twitter"
							>
								<IconTwitter />
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#none"
								target="_blank"
								className="nav__link"
								title="Instagram"
							>
								<IconInstagram />
							</a>
						</li>
						<li className="nav__item">
							<a
								href="#none"
								target="_blank"
								className="nav__link"
								title="Youtube"
							>
								<IconYoutube />
							</a>
						</li>
					</ul>
				</div>
				<div className="corporate">
					<h2 className="corporate__logo">
						<Logo />
					</h2>
					<ul className="corporate__list">
						<li className="corporate__item">
							<a href="#none" className="corporate__link">
								Terms of Service
							</a>
						</li>
						<li className="corporate__item">
							<a href="#none" className="corporate__link">
								Privacy Policy
							</a>
						</li>
					</ul>
					<span className="corporate__copyright">
						&copy; 2022 Monito. All rights reserved.
					</span>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
