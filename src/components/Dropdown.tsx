import classnames from 'classnames';
import { useRef, useState, useEffect } from 'react';
import { ReactComponent as IconArrowBottom } from '~/assets/images/svg/ico-arrow-bottom.svg';
import useClickOutSide from '~/hooks/useClickOutSide';

interface DropdownPropType {
	arrayData: OptionType[];
	parentClassName?: string;
	onChange: (value: any) => void;
}

interface OptionType {
	text: string;
	data: string;
}

function Dropdown({ arrayData, parentClassName, onChange }: DropdownPropType) {
	const [showOption, setShowOption] = useState(false);
	const [value, setValue] = useState(arrayData[0]);
	const dropdownRef = useRef(null);

	const handleClickBtn = () => {
		setShowOption(!showOption);
	};

	const handleHideOption = () => {
		setShowOption(false);
	};

	const handleClickOption = (data: OptionType) => {
		setValue((prev) => ({
			...prev,
			text: data.text,
			data: data.data,
		}));
		setShowOption(false);
	};

	useEffect(() => {
		onChange(value);
	}, [value]);

	useClickOutSide(dropdownRef, handleHideOption);

	return (
		<div
			className={classnames(
				'dropdown',
				showOption && 'is-open',
				parentClassName
			)}
			ref={dropdownRef}
		>
			<button type="button" className="dropdown__btn" onClick={handleClickBtn}>
				{value.text}
				<IconArrowBottom className="icon icon--arrow" />
			</button>
			<div className="option">
				<ul className="option__list">
					{arrayData.map((data) => (
						<li
							key={data.text}
							className={classnames(
								'option__item',
								value.text === data.text && 'is-active'
							)}
						>
							<button
								type="button"
								className="option__btn"
								onClick={() => handleClickOption(data)}
							>
								{data.text}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Dropdown;
