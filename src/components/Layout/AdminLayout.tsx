import { Link, Outlet } from 'react-router-dom';
import BreadCrumb from '../admin/BreadCrumb';

import Search from '../Search';
import Gnb from '../admin/Gnb';

import { ReactComponent as IconUser } from '../../assets/images/admin/ico-profile.svg';
import { ReactComponent as IconSetting } from '../../assets/images/admin/ico-setting.svg';
import { ReactComponent as IconNoti } from '../../assets/images/admin/ico-noti.svg';

function AdminLayout() {
	return (
		<div className="admin">
			<Gnb />
			<div className="content">
				<div className="head">
					<BreadCrumb />
					<div className="menu">
						<Search placeholder="Type here..." />
						<Link to="/user" className="sign">
							<IconUser className="icon" />
							Bie
						</Link>
						<div className="group-btn">
							<button type="button" className="btn">
								<IconSetting className="icon" />
							</button>
							<button type="button" className="btn">
								<IconNoti className="icon" />
							</button>
						</div>
					</div>
				</div>
				<Outlet />
				<div className="foot">footer</div>
			</div>
		</div>
	);
}

export default AdminLayout;
