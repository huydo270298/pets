import classname from 'classnames';
import { ReactNode } from 'react';

interface BoxPropType {
	classBox?: string;
	children: ReactNode;
}
function Box({ classBox, children }: BoxPropType) {
	return <div className={classname('box', classBox)}>{children}</div>;
}

export default Box;
