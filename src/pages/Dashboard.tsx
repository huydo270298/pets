import Analytic from '~/components/admin/Analytic';
import Box from '~/components/admin/Box';
import { ReactComponent as IconWallet } from '../assets/images/admin/ico-wallet.svg';
import { ReactComponent as IconGlobe } from '../assets/images/admin/ico-globe.svg';
import { ReactComponent as IconDocument } from '../assets/images/admin/ico-document.svg';
import { ReactComponent as IconCart } from '../assets/images/admin/ico-cart.svg';
import { ReactComponent as IconArrow } from '../assets/images/admin/ico-arrow.svg';
import { ReactComponent as IconFace5 } from '../assets/images/admin/ico-face5.svg';
import ChartFav from '~/components/admin/ChartFav';

const revenues = [
	{
		id: 1,
		name: 'Today’s Money',
		quantity: '$53,000',
		rate: 55,
		status: true,
		icon: <IconWallet />,
	},
	{
		id: 2,
		name: 'Today’s Users',
		quantity: '2,300',
		rate: 5,
		status: true,
		icon: <IconGlobe />,
	},
	{
		id: 3,
		name: 'New Clients',
		quantity: '+3,052',
		rate: 14,
		status: false,
		icon: <IconDocument />,
	},
	{
		id: 4,
		name: 'Total Sales',
		quantity: '$173,000',
		rate: 8,
		status: true,
		icon: <IconCart />,
	},
];

function Dashboard() {
	return (
		<div className="dashboard">
			<div className="revenue">
				{revenues.map((revenue) => (
					<Box key={revenue.id}>
						<Analytic
							name={revenue.name}
							quantity={revenue.quantity}
							rate={revenue.rate}
							status={revenue.status}
							icon={revenue.icon}
						/>
					</Box>
				))}
			</div>
			<div className="overview">
				<div className="line">
					<Box classBox="box-auth">
						<h1 className="user">
							Welcome back,
							<strong className="name">Bie</strong>
						</h1>
						<p className="sub">
							Glad to see you again!
							<br /> Ask me anything.
						</p>
						<a href="#none" className="link">
							Tap to record
							<IconArrow className="icon" />
						</a>
					</Box>
					<Box classBox="box-fav">
						<div className="chart">
							<ChartFav />
							<div className="process-bar">95%</div>
							<div className="icon">
								<IconFace5 />
							</div>
							<Box classBox="detail">
								<span className="min-val">0%</span>
								<div className="current-val">
									<strong className="val">95%</strong>
									<span className="txt">Based on likes</span>
								</div>
								<span className="max-val">100%</span>
							</Box>
						</div>
					</Box>
					<Box classBox="box-tracking">
						<h2 className="tit">Referral Tracking</h2>
						<div className="cont">
							<ul className="detail">
								<li>
									<Box>
										<span className="name">Invited</span>
										<span className="val">145 people</span>
									</Box>
								</li>
								<li>
									<Box>
										<span className="name">Bonus</span>
										<span className="val">1,465</span>
									</Box>
								</li>
							</ul>
							<div className="chart">
								<div className="process-bar">9.3</div>
								<div className="txt">
									<span className="status">Safety</span>
									<strong className="val">9.3</strong>
									<span className="name">Total Score</span>
								</div>
							</div>
						</div>
					</Box>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
