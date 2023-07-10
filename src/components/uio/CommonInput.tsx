import Input from '../Input';

function CommonInput() {
	return (
		<div className="component">
			<h2 className="component__tit">Input Fields</h2>
			<div className="component__cont component__cont--input">
				<Input id="input" type="text" placeholder="Type something here!" />
				<Input
					id="input2"
					type="password"
					placeholder="Type something here!"
					subMes="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
				/>
				<Input
					id="input3"
					type="text"
					label="Label"
					placeholder="Type something here!"
					errorMes="Empty text"
				/>
				<Input
					id="input4"
					type="password"
					label="Label"
					placeholder="Type something here!"
					errorMes="Empty text"
					subMes="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor"
				/>
			</div>
		</div>
	);
}

export default CommonInput;
