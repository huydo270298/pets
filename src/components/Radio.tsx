export interface RadioProp {
	name: string;
	id: string;
	checked?: boolean;
	label: string;
	disabled?: boolean;
}

export interface DataItemProp {
	dataItem: RadioProp;
	idActive: string;
	onChange: (id: string) => void;
}

function Radio({ dataItem, idActive, onChange }: DataItemProp) {
	const { name, id, label, ...prop } = dataItem;
	return (
		<div className="radio">
			<input
				type="radio"
				className="input"
				id={id}
				checked={idActive === id}
				name={name}
				onChange={() => onChange(id)}
				{...prop}
			/>
			<label htmlFor={id} className="label">
				{label}
			</label>
		</div>
	);
}

export default Radio;
