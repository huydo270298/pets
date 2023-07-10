import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { fomartCurrency, fomartAge } from '~/utils/synthetic';

import { ReactComponent as IconGift } from '~/assets/images/svg/ico-gift.svg';

interface DataProp {
	data: ItemProp[];
	parentClassName?: string;
}

interface ItemProp {
	id: number;
	name: string;
	img: string;
	size: string;
	price: number;
	category: string;
	promotion: string;
}

function CardProducts({ data, parentClassName }: DataProp) {
	return (
		<div className={classnames('card', 'card--product', parentClassName)}>
			<ul className="card__list">
				{data?.map((item) => (
					<li key={item.id} className="card__item">
						<div className="box">
							<Link to={`/products/${item.id}`} className="box__link">
								<div className="box__img">
									<img src={item.img} alt="" />
								</div>
								<div className="box__cont">
									<strong className="box__name">{item.name}</strong>
									<div className="box__info">
										<dl>
											<dt>Product:</dt>
											<dd>{item.category}</dd>
										</dl>
										{item.size && (
											<dl>
												<dt>Size:</dt>
												<dd>{item.size}</dd>
											</dl>
										)}
									</div>
									<div className="box__price">
										{fomartCurrency(item.price) || 0} VND
									</div>
									{item.promotion && (
										<div className="box__promotion">
											<IconGift />
											<span className="txt">{item.promotion}</span>
										</div>
									)}
								</div>
							</Link>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CardProducts;
