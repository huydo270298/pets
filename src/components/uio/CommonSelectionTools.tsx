import Checkbox from '../Checkbox';
import RadioGroup from '../RadioGroup';

const arrayRadio = [
	{ name: 'radio', id: 'radio', label: 'Type something here!' },
	{
		name: 'radio',
		id: 'radio2',
		label: 'Type something here!',
	},
	{
		name: 'radio',
		id: 'radio3',
		label: 'Type something here!',
		disabled: true,
	},
];
function CommonSelectionTools() {
	return (
		<div className="component">
			<h2 className="component__tit">Selection Tools</h2>
			<div className="component__cont component__cont--selection">
				<div className="component__item">
					<h3 className="tit">Checkbox</h3>
					<Checkbox
						name="common"
						label="Type something here!"
						id="checkbox"
						checked
					/>
					<Checkbox
						name="common"
						label="Type something here!"
						id="checkbox2"
						checked={false}
					/>
					<Checkbox
						name="common"
						label="Type something here!"
						id="checkbox3"
						checked={false}
						disabled
					/>
				</div>
				<div className="component__item">
					<h3 className="tit">Radio</h3>
					<RadioGroup data={arrayRadio} />
				</div>
			</div>
		</div>
	);
}

export default CommonSelectionTools;
