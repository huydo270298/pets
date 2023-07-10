import classnames from 'classnames';
import { ReactNode } from 'react';

interface AnalyticPropType {
	name: string;
	quantity: string;
	rate: number;
	status: boolean;
	icon: ReactNode;
}

function Analytic({ name, quantity, rate, status, icon }: AnalyticPropType) {
	return (
		<div className="analytic">
			<dl>
				<dt className="tit">{name}</dt>
				<dd className="val">
					<strong className="num">{quantity}</strong>
					<span className={classnames('rate', status ? 'inc' : 'dec')}>
						{status ? '+' : '-'}
						{`${rate}%`}
					</span>
				</dd>
			</dl>
			<div className="icon">{icon}</div>
		</div>
	);
}

export default Analytic;
