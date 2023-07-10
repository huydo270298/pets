import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';

import Input from '~/components/Input';
import Toastify from '~/components/Toastify';
import Checkbox from '~/components/admin/Checkbox';

interface ToastType {
	type: 'success' | 'error';
	message: string;
}

const FormSchema = yup.object().shape({
	email: yup
		.string()
		.required('Please enter your email address')
		.email('Please enter a valid email address'),
	password: yup.string().required('Please enter your email address'),
});

function Login() {
	const location = useLocation();
	const { redirectTo } = queryString.parse(location.search);

	const navigate = useNavigate();
	const [isLogin, setIsLogin] = useState(false);
	const [isShowToast, setIsShowToast] = useState(false);
	const [toast, setToast] = useState<ToastType>({
		type: 'success',
		message: '',
	});

	const handleSubmit = () => {
		localStorage.setItem('admin', 'true');
		setIsLogin(true);
		setIsShowToast(true);
	};

	useEffect(() => {
		document.title = 'Login - Pets project';
	}, []);

	useEffect(() => {
		if (isLogin) {
			setToast((prev) => ({
				...prev,
				type: 'success',
				message: 'You have successfully logged in.',
			}));
			if (!redirectTo) {
				setTimeout(() => {
					navigate('/');
				}, 2000);
			} else {
				setTimeout(() => {
					navigate(`${redirectTo}`);
				}, 2000);
			}
		} else {
			setToast((prev) => ({
				...prev,
				type: 'error',
				message: 'The login information is incorrect.',
			}));
		}
	}, [isLogin]);

	return (
		<div className="login">
			<div className="inner">
				<div className="banner">
					<dl>
						<dt>INSPIRED BY THE FUTURE:</dt>
						<dd>THE VISION UI DASHBOARD</dd>
					</dl>
				</div>
				<div className="cont">
					<Formik
						initialValues={{
							email: '',
						}}
						validationSchema={FormSchema}
						onSubmit={() => {
							handleSubmit();
						}}
					>
						{() => (
							<div className="form">
								<Form>
									<h2 className="tit">Nice to see you</h2>
									<p className="desc">
										Enter your email and password to sign in
									</p>
									<div className="group">
										<Input
											type="text"
											placeholder="Your email address"
											id="email"
											label="Email"
											name="email"
										/>
									</div>
									<div className="group">
										<Input
											type="password"
											placeholder="Your password"
											id="password"
											label="Password"
										/>
									</div>
									<div className="remember">
										<Checkbox />
									</div>
									<button type="submit" className="btn">
										Sign in
									</button>
								</Form>
							</div>
						)}
					</Formik>

					<div className="foot">
						<p className="author">
							@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web
						</p>
						<ul className="menu">
							<li>Marketplace</li>
							<li>Blog</li>
							<li>License</li>
						</ul>
					</div>
				</div>
			</div>
			{isShowToast && (
				<Toastify
					type={toast.type}
					name="login"
					message={toast.message}
					isBtn={toast.type === 'error'}
					handleClick={setIsShowToast}
				/>
			)}
		</div>
	);
}

export default Login;
