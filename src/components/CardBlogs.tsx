import classnames from 'classnames';
import { Link } from 'react-router-dom';

interface DataProp {
	data: ItemProp[];
	parentClassName?: string;
}

interface ItemProp {
	id: number;
	tag: string;
	thumb: string;
	title: string;
	desc: string;
}

function CardBlogs({ data, parentClassName }: DataProp) {
	return (
		<div className={classnames('card', 'card--blog', parentClassName)}>
			<ul className="card__list">
				{data?.map((item) => (
					<li key={item.id} className="card__item">
						<div className="box">
							<Link to={`/blogs/${item.id}`} className="box__link">
								<div className="box__img">
									<img src={item.thumb} alt="" />
								</div>
								<div className="box__cont">
									<span className="box__tag">{item.tag}</span>
									<strong className="box__name">{item.title}</strong>
									<p className="box__desc">{item.desc}</p>
								</div>
							</Link>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default CardBlogs;
