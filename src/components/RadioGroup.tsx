import { useState } from 'react';
import Radio, { RadioProp } from './Radio';

interface DataProp {
	data: RadioProp[];
}

function RadioGroup({ data }: DataProp) {
	const handleIndex = () => {
		const arrFilter = data.filter((itemData) => {
			return itemData.checked === true;
		});
		if (arrFilter.length > 0) {
			return arrFilter[arrFilter.length - 1]?.id;
		}
		return data[0].id;
	};
	const [radioActive, setRadioActive] = useState(handleIndex);

	const handleChangeRadio = (id: string) => {
		setRadioActive(id);
	};

	return (
		<div className="radio-group">
			{data.map((item, index) => {
				return (
					<Radio
						// eslint-disable-next-line react/no-array-index-key
						key={index}
						dataItem={item}
						idActive={radioActive}
						onChange={handleChangeRadio}
					/>
				);
			})}
		</div>
	);
}

export default RadioGroup;
