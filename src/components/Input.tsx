import { InputHTMLAttributes, useState } from 'react';
import { ErrorMessage, Field } from 'formik';
import classnames from 'classnames';

import { ReactComponent as IconEyeHide } from '~/assets/images/svg/ico-eye-hide.svg';
import { ReactComponent as IconEyeShow } from '~/assets/images/svg/ico-eye-show.svg';
import { ReactComponent as IconError } from '~/assets/images/svg/ico-error.svg';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	errorMes?: string;
	subMes?: string;
	parentClassName?: string;
}

function Input({
	label,
	errorMes,
	subMes,
	parentClassName,
	...props
}: InputProps) {
	const [showPass, setShowPass] = useState(false);
	const handleTogglePass = () => {
		setShowPass(!showPass);
	};
	return (
		<div className={classnames('input-box', parentClassName)}>
			{label && (
				<label className="label" htmlFor={props.id}>
					{label}
				</label>
			)}
			<div className="input-box__group">
				<Field
					{...props}
					value={props.value}
					type={showPass ? 'text' : props.type}
					className={classnames('input', props.className)}
				/>
				{props.type === 'password' && (
					<button
						type="button"
						className="btn-show"
						aria-label={showPass ? 'show' : 'hide'}
						onClick={handleTogglePass}
					>
						{showPass ? (
							<IconEyeShow className="icon icon--eye" />
						) : (
							<IconEyeHide className="icon icon--eye" />
						)}
					</button>
				)}
				{props.name && (
					<ErrorMessage name={props.name}>
						{(mess: string) => (
							<p className="message message--error">
								<IconError />
								{mess}
							</p>
						)}
					</ErrorMessage>
				)}
			</div>
			{subMes && <p className="message">{subMes}</p>}
		</div>
	);
}

export default Input;
