/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Checkbox() {
	return (
		<div className="chk">
			<input type="checkbox" id="remember" />
			<label htmlFor="remember" className="label">
				Remember me
			</label>
		</div>
	);
}

export default Checkbox;
