import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import useWindowSize from '~/hooks/useWindowSize';

import Language from './Language';
import GNB from './GNB';
import Search from '../Search';

import { ReactComponent as Logo } from '~/assets/images/logo.svg';
import { ReactComponent as IconMenu } from '~/assets/images/svg/ico-menu.svg';
import { ReactComponent as IconClose } from '~/assets/images/svg/ico-close.svg';
import { ReactComponent as IconSearch } from '~/assets/images/svg/ico-search-blue.svg';
import Button from '../Button';
import useScroll from '~/hooks/useScroll';

function Header() {
	const [windowWidth] = useWindowSize();
	const isScroll = useScroll();
	const [openMenu, setOpenMenu] = useState(false);

	const [isScrollLock, setIsScrollLock] = useState(false);
	const handleClickClose = () => {
		setOpenMenu(false);
		setIsScrollLock(false);
	};
	const handleClickOpen = () => {
		setOpenMenu(true);
		setIsScrollLock(true);
	};

	const location = useLocation();

	useEffect(() => {
		setOpenMenu(false);
		setIsScrollLock(false);
	}, [location.pathname]);

	useEffect(() => {
		if (isScrollLock) {
			document.querySelector('body')?.setAttribute('data-overflow', 'true');
		} else {
			document.querySelector('body')?.setAttribute('data-overflow', 'false');
		}
	}, [isScrollLock]);

	return (
		<header
			id="header"
			className={classnames('header', isScroll && 'is-fixed')}
		>
			<div className="inner">
				<h1 className="logo">
					<Link to="/" className="logo__link" title="Monito">
						<Logo />
					</Link>
				</h1>
				{windowWidth <= 828 ? (
					<>
						<div
							className={classnames(
								'header-gnb',
								openMenu === true && 'is-open'
							)}
						>
							<GNB />
							<button
								type="button"
								className="btn--close"
								aria-label="open menu"
								onClick={handleClickClose}
							>
								<IconClose />
							</button>
							<div className="gnb--bottom">
								<Language />
								<Button size="small" text="Logout" className="btn--logout" />
							</div>
						</div>
						<button
							type="button"
							className="btn--menu"
							aria-label="open menu"
							onClick={handleClickOpen}
						>
							<IconMenu />
						</button>
						<button type="button" className="btn--search" aria-label="search">
							<IconSearch />
						</button>
						{openMenu === true && <div className="dimmed" />}
					</>
				) : (
					<>
						<GNB />
						{windowWidth > 1024 ? (
							<Search placeholder="Search something here!" />
						) : (
							<button type="button" className="btn--search" aria-label="search">
								<IconSearch />
							</button>
						)}

						<Language />
					</>
				)}
			</div>
		</header>
	);
}

export default Header;
