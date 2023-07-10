import { InputHTMLAttributes, ReactNode } from 'react';

import classnames from 'classnames';

export interface SizeType {
	name: string;
	id: string;
	checked: boolean | undefined;
}
export interface CheckboxProp extends InputHTMLAttributes<HTMLInputElement> {
	label?: ReactNode;
	name: string;
	parentClassName?: string;
}

function Checkbox({ type, label, parentClassName, ...props }: CheckboxProp) {
	return (
		<div className={classnames('checkbox', parentClassName)}>
			<input
				{...props}
				type="checkbox"
				className="input"
				name={props.name}
				id={props.id}
				value={props.id}
				aria-label={label ? undefined : props.id}
			/>
			{label && (
				<label htmlFor={props.id} className="label">
					{label}
				</label>
			)}
		</div>
	);
}

export default Checkbox;
