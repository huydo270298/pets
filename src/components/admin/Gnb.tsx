import { NavLink } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as IconHome } from '../../assets/images/admin/ico-home.svg';
import { ReactComponent as IconTables } from '../../assets/images/admin/ico-tables.svg';
import { ReactComponent as IconBilling } from '../../assets/images/admin/ico-billing.svg';
import { ReactComponent as IconRtl } from '../../assets/images/admin/ico-rtl.svg';
import { ReactComponent as IconProfile } from '../../assets/images/admin/ico-profile.svg';
import { ReactComponent as IconSignIn } from '../../assets/images/admin/ico-signin.svg';
import { ReactComponent as IconSignUp } from '../../assets/images/admin/ico-signup.svg';
import { ReactComponent as IconHelp } from '../../assets/images/admin/ico-help.svg';

function Gnb() {
	return (
		<div className="gnb">
			<div className="logo">
				<Logo className="svg" />
			</div>
			<nav className="nav">
				<div className="group">
					<ul className="list">
						<li className="item">
							<NavLink to="/admin" className="link" end>
								<IconHome className="icon" />
								<span className="name">Dashboard</span>
							</NavLink>
						</li>
						<li className="item">
							<NavLink to="/admin/tables" className="link">
								<IconTables className="icon" />
								<span className="name">Tables</span>
							</NavLink>
						</li>
						<li className="item">
							<NavLink to="/admin/billing" className="link">
								<IconBilling className="icon" />
								<span className="name">Billing</span>
							</NavLink>
						</li>
						<li className="item">
							<NavLink to="/admin/rtl" className="link">
								<IconRtl className="icon" />
								<span className="name">RTL</span>
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="group">
					<div className="tit">Account pages</div>
					<ul className="list">
						<li className="item">
							<NavLink to="/admin/profile" className="link">
								<IconProfile className="icon" />
								<span className="name">Profile</span>
							</NavLink>
						</li>
						<li className="item">
							<NavLink to="/admin/signin" className="link">
								<IconSignIn className="icon" />
								<span className="name">Sign In</span>
							</NavLink>
						</li>
						<li className="item">
							<NavLink to="/admin/signup" className="link">
								<IconSignUp className="icon" />
								<span className="name">Sign Up</span>
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
			<div className="help-box">
				<IconHelp className="icon" />
				<strong className="help-tit">Need help?</strong>
				<span className="help-desc">Please check our docs</span>
				<button type="button" className="btn">
					DOCUMENTATION
				</button>
			</div>
		</div>
	);
}

export default Gnb;
