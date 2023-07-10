import { ButtonHTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	buttonType?: 'default' | 'outline';
	iconPosition?: 'only' | 'left' | 'right';
	size?: 'default' | 'small';
	text: string;
}

function Button({
	children,
	buttonType = 'default',
	iconPosition,
	size = 'default',
	text,
	...props
}: ButtonProps) {
	return (
		<button
			{...props}
			type={props.type ? props.type : 'button'}
			className={classnames(
				'btn',
				buttonType !== 'default' && `btn--${buttonType}`,
				iconPosition === 'only' && `btn--only-icon`,
				size !== 'default' && `btn--${size}`,
				props.className
			)}
			disabled={props.disabled}
			aria-label={iconPosition === 'only' ? text : undefined}
		>
			{iconPosition === 'left' && text && text}
			{iconPosition ? children : text}
			{iconPosition === 'right' && text && text}
		</button>
	);
}

export default Button;
