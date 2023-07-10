import { Link } from 'react-router-dom';

function BreadCrumb() {
	return (
		<ul className="breadcrumb">
			<li className="breadcrumb__item">
				<Link to="/" className="breadcrumb__link">
					Home
				</Link>
			</li>
			<li className="breadcrumb__item">
				<Link to="/pets" className="breadcrumb__link">
					Dogs
				</Link>
			</li>
			<li className="breadcrumb__item">Small Dog</li>
		</ul>
	);
}
export default BreadCrumb;
