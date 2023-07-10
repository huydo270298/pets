import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonCardPet() {
	return (
		<div className="box">
			<div className="box__link">
				<div className="box__img">
					<Skeleton duration={1} height={264} width={264} />
				</div>
				<div className="box__cont">
					<strong className="box__name">
						<Skeleton duration={1} height={24} />
					</strong>
					<div className="box__info" style={{ display: 'block' }}>
						<Skeleton duration={1} height={21} width="100%" />
					</div>
					<div className="box__price">
						<Skeleton duration={1} height={20} width="50%" />
					</div>
				</div>
			</div>
		</div>
	);
}

export function SkeletonCardDetail() {
	return (
		<>
			<div className="image">
				<div className="image-box">
					<div className="img img--big">
						<Skeleton duration={1} height={476} />
					</div>
					<ul className="img-list">
						<li className="img img--small">
							<Skeleton duration={1} height={94} width={94} />
						</li>
						<li className="img img--small">
							<Skeleton duration={1} height={94} width={94} />
						</li>
						<li className="img img--small">
							<Skeleton duration={1} height={94} width={94} />
						</li>
						<li className="img img--small">
							<Skeleton duration={1} height={94} width={94} />
						</li>
						<li className="img img--small">
							<Skeleton duration={1} height={94} width={94} />
						</li>
						<li className="img img--small">
							<Skeleton duration={1} height={94} width={94} />
						</li>
					</ul>
				</div>
			</div>
			<div className="info">
				<span className="breadcrum">
					<Skeleton duration={1} height={24} width="50%" />
				</span>
				<div className="info-detail">
					<span className="info-detail__id">
						<Skeleton duration={1} height={20} width="20%" />
					</span>
					<strong className="info-detail__name">
						<Skeleton duration={1} height={20} width="50%" />
					</strong>
					<strong className="info-detail__price">
						<Skeleton duration={1} height={20} width="30%" />
					</strong>
				</div>
				<div className="btn_area" />
				<table className="info-table">
					<caption>Skeleton Table</caption>
					<colgroup>
						<col style={{ width: '194px' }} />
						<col />
					</colgroup>
					<tbody>
						<tr>
							<th>
								<Skeleton duration={1} height={20} />
							</th>
							<td>
								<Skeleton duration={1} height={20} />
							</td>
						</tr>
						<tr>
							<th>
								<Skeleton duration={1} height={20} />
							</th>
							<td>
								<Skeleton duration={1} height={20} />
							</td>
						</tr>
						<tr>
							<th>
								<Skeleton duration={1} height={20} />
							</th>
							<td>
								<Skeleton duration={1} height={20} />
							</td>
						</tr>
						<tr>
							<th>
								<Skeleton duration={1} height={20} />
							</th>
							<td>
								<Skeleton duration={1} height={20} />
							</td>
						</tr>
						<tr>
							<th>
								<Skeleton duration={1} height={20} />
							</th>
							<td>
								<Skeleton duration={1} height={20} />
							</td>
						</tr>
						<tr>
							<th>
								<Skeleton duration={1} height={20} />
							</th>
							<td>
								<Skeleton duration={1} height={20} />
							</td>
						</tr>
						<tr>
							<th>
								<Skeleton duration={1} height={20} />
							</th>
							<td>
								<Skeleton duration={1} height={20} />
							</td>
						</tr>
						<tr>
							<th>
								<Skeleton duration={1} height={20} />
							</th>
							<td>
								<Skeleton duration={1} height={20} />
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}

export function SkeletonCardDetailCustomer() {
	return (
		<div className="customer">
			<ul className="customer__list">
				<li className="customer__item">
					<Skeleton duration={1} height={340} width={248} />
				</li>
				<li className="customer__item">
					<Skeleton duration={1} height={340} width={248} />
				</li>
				<li className="customer__item">
					<Skeleton duration={1} height={340} width={248} />
				</li>
				<li className="customer__item">
					<Skeleton duration={1} height={340} width={248} />
				</li>
				<li className="customer__item">
					<Skeleton duration={1} height={340} width={248} />
				</li>
			</ul>
		</div>
	);
}
