import { Outlet } from 'react-router-dom';
import Header from '~/components/Header/Header';
import Footer from '~/components/Footer';
import ScrollToTop from '../ScrollToTop';

function RootLayout() {
	return (
		<>
			<ScrollToTop />
			<div className="wrap">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export default RootLayout;
