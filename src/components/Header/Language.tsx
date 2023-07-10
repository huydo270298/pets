import classnames from 'classnames';
import { useState } from 'react';
import {
	ReactComponent as IconLangVN,
	ReactComponent as IconLangEN,
} from '~/assets/images/svg/ico-lang-vn.svg';
import { ReactComponent as IconDropdown } from '~/assets/images/svg/ico-down.svg';

interface LangProp {
	title: string;
	icon: JSX.Element;
}

function Language() {
	const Lang = [
		{
			title: 'VND',
			icon: <IconLangVN />,
		},
		{
			title: 'EN',
			icon: <IconLangEN />,
		},
	];
	const [show, setShow] = useState(false);
	const [LangSelect, setLangSelect] = useState(Lang[0]);
	const handleShow = () => {
		setShow(!show);
	};
	const handleClick = (item: LangProp) => {
		setLangSelect(item);
		setShow(false);
	};
	return (
		<div className="language">
			<button
				type="button"
				className={classnames('language__btn', show === true && 'is-show')}
				onClick={handleShow}
				aria-label={LangSelect.title}
			>
				{LangSelect.icon}
				<span className="language__name">{LangSelect.title}</span>
				<IconDropdown className="icon icon--dropdown" />
			</button>
			{show === true && (
				<ul className="language__list">
					{Lang.map((item, index) => {
						return (
							// eslint-disable-next-line react/no-array-index-key
							<li className="language__item" key={index}>
								<button
									type="button"
									className="language__link"
									onClick={() => handleClick(item)}
									aria-label={item.title}
								>
									{item.icon}
									<span className="language__name">{item.title}</span>
								</button>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}

export default Language;
