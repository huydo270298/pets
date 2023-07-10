import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import Home from '~/pages/Home';
import NotFound from '~/pages/NotFound';
import Components from '~/pages/Components';
import RootLayout from './components/Layout/RootLayout';
import Pets from './pages/Pets';
import Detail from './pages/Detail';
import PrivateRoute from './routes/PrivateRoute';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import AdminLayout from './components/Layout/AdminLayout';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route>
			<Route path="/" element={<RootLayout />}>
				<Route index element={<Home />} />
				<Route path="/pets" element={<Pets />} />
				<Route path="/pets/:id" element={<Detail />} />
			</Route>
			<Route path="/components" element={<Components />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
			<Route element={<PrivateRoute />}>
				<Route path="/admin" element={<AdminLayout />}>
					<Route
						index
						element={<Dashboard />}
						handle={{
							crumb: () => 'dashboard',
						}}
					/>
					<Route
						path="/admin/tables"
						element={<Dashboard />}
						handle={{
							crumb: () => 'tables',
						}}
					/>
					<Route
						path="/admin/billing"
						element={<Dashboard />}
						handle={{
							crumb: () => 'billing',
						}}
					/>
					<Route
						path="/admin/rtl"
						element={<Dashboard />}
						handle={{
							crumb: () => 'rtl',
						}}
					/>
					<Route
						path="/admin/profile"
						element={<Dashboard />}
						handle={{
							crumb: () => 'profile',
						}}
					/>
				</Route>
			</Route>
		</Route>
	)
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
