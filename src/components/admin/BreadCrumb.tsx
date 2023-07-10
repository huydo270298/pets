import React from 'react';
import { Link, useMatches } from 'react-router-dom';
import Search from '../Search';

function BreadCrumb() {
	const matches = useMatches();

	const crumbs = matches
		// first get rid of any matches that don't have handle and crumb
		.filter((match: any) => Boolean(match.handle?.crumb))
		// now map them into an array of elements, passing the loader
		// data to each one
		.map((match: any) => match.handle.crumb(match.data));

	return (
		<div className="bread-admin">
			<ul className="list">
				<li className="item">
					<Link to="/admin" className="link">
						pages
					</Link>
				</li>
				{crumbs.map((crumb, index) => {
					return (
						<li key={crumb} className="item">
							{index === crumbs.length - 1 ? (
								crumb
							) : (
								<Link to={`${crumb}`} className="link">
									{crumb}
								</Link>
							)}
						</li>
					);
				})}
			</ul>
			<h2 className="title-page">{crumbs[crumbs.length - 1]}</h2>
		</div>
	);
}

export default BreadCrumb;
