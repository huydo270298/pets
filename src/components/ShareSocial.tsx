import {
	FacebookShareButton,
	TwitterShareButton,
	InstapaperShareButton,
} from 'react-share';

import { ReactComponent as IconFacebook } from '~/assets/images/svg/ico-facebook-grey.svg';
import { ReactComponent as IconTwitter } from '~/assets/images/svg/ico-twitter-grey.svg';
import { ReactComponent as IconInstagram } from '~/assets/images/svg/ico-instagram-grey.svg';
import { ReactComponent as IconYoutube } from '~/assets/images/svg/ico-youtube-grey.svg';

function ShareSocial() {
	return (
		<ul className="share-sns">
			<li className="share-sns__item">
				<FacebookShareButton url="https://www.google.com/">
					<IconFacebook />
				</FacebookShareButton>
			</li>
			<li className="share-sns__item">
				<TwitterShareButton url="https://www.google.com/">
					<IconTwitter />
				</TwitterShareButton>
			</li>
			<li className="share-sns__item">
				<InstapaperShareButton url="https://www.google.com/">
					<IconInstagram />
				</InstapaperShareButton>
			</li>
			<li className="share-sns__item">
				<a href="#none" target="_blank">
					<IconYoutube />
				</a>
			</li>
		</ul>
	);
}

export default ShareSocial;
