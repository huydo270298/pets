import Dropdown from '../Dropdown';

const arrayData = [
	{
		text: 'Text here',
		data: 'Text here',
	},
];
function CommonDropdown() {
	return (
		<div className="component">
			<h2 className="component__tit">Dropdown</h2>
			<div className="component__cont component__cont--dropdown">
				<Dropdown arrayData={arrayData} onChange={() => {}} />
			</div>
		</div>
	);
}

export default CommonDropdown;
