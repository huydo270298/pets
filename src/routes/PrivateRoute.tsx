import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function PrivateRoute() {
	const prevLocation = useLocation();

	const navigate = useNavigate();
	const admin = localStorage.getItem('admin') || '';

	useEffect(() => {
		if (!admin)
			navigate(
				`/login?redirectTo=${prevLocation.pathname}${prevLocation.search}`
			);
	}, []);

	return <Outlet />;
}

export default PrivateRoute;
