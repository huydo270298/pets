import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { fomartCurrency, fomartAge } from '~/utils/synthetic';

interface DataProp {
	data: ItemProp[];
	parentClassName?: string;
}

interface ItemProp {
	id: number;
	name: string;
	src: string;
	code: string;
	price: number;
	genre: string;
	dateOfBirth: string;
}

function CardPets({ data, parentClassName }: DataProp) {
	return (
		<div className={classnames('card', parentClassName)}>
			<ul className="card__list">
				{data?.map((item) => (
					<li key={item.id} className="card__item">
						<div className="box">
							<Link to={`/pets/${item.id}`} className="box__link">
								<div className="box__img">
									<img src={item.src} alt="" />
								</div>
								<div className="box__cont">
									<strong className="box__name">{`${item.code} - ${item.name}`}</strong>
									<div className="box__info">
										<dl>
											<dt>Gene:</dt>
											<dd>{item.genre}</dd>
										</dl>
										<dl>
											<dt>Age:</dt>
											<dd>{fomartAge(item.dateOfBirth)}</dd>
										</dl>
									</div>
									<div className="box__price">
										{fomartCurrency(item.price) || 0} VND
									</div>
								</div>
							</Link>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CardPets;
