import Button from '../Button';

import '~/assets/scss/pages/_components.scss';
import { ReactComponent as IconMore } from '~/assets/images/svg/ico-btn-white.svg';
import { ReactComponent as IconGrey } from '~/assets/images/svg/ico-btn-grey.svg';
import { ReactComponent as IconBlue } from '~/assets/images/svg/ico-btn-blue.svg';

function CommonButton() {
	return (
		<div className="component">
			<h2 className="component__tit">Button</h2>
			<div className="component__cont">
				<h3 className="tit">Button Big</h3>
				<div className="cont">
					<h4 className="sub-tit">Default</h4>
					<div className="sub-cont sub-cont--button">
						<Button text="Click here" style={{ minWidth: '163px' }} />
						<Button text="Click here" iconPosition="right">
							<IconMore />
						</Button>
						<Button text="Click here" iconPosition="left">
							<IconMore />
						</Button>
						<Button iconPosition="only" text="Click here">
							<IconMore />
						</Button>
					</div>
					<h4 className="sub-tit">Disable</h4>
					<div className="sub-cont sub-cont--button">
						<Button text="Click here" disabled style={{ minWidth: '163px' }} />
						<Button text="Click here" disabled iconPosition="right">
							<IconGrey />
						</Button>
						<Button text="Click here" disabled iconPosition="left">
							<IconGrey />
						</Button>
						<Button disabled iconPosition="only" text="Click here">
							<IconGrey />
						</Button>
					</div>
					<h4 className="sub-tit">Outline</h4>
					<div className="sub-cont sub-cont--button">
						<Button
							buttonType="outline"
							text="Click here"
							style={{ minWidth: '163px' }}
						/>
						<Button buttonType="outline" text="Click here" iconPosition="right">
							<IconBlue />
						</Button>
						<Button buttonType="outline" text="Click here" iconPosition="left">
							<IconBlue />
						</Button>
						<Button buttonType="outline" iconPosition="only" text="Click here">
							<IconBlue />
						</Button>
					</div>
				</div>
				<h3 className="tit">Button Small</h3>
				<div className="cont">
					<h4 className="sub-tit">Default</h4>
					<div className="sub-cont sub-cont--button">
						<Button
							size="small"
							text="Click here"
							style={{ minWidth: '163px' }}
						/>
						<Button size="small" text="Click here" iconPosition="right">
							<IconMore />
						</Button>
						<Button size="small" text="Click here" iconPosition="left">
							<IconMore />
						</Button>
						<Button size="small" iconPosition="only" text="Click here">
							<IconMore />
						</Button>
					</div>
					<h4 className="sub-tit">Disable</h4>
					<div className="sub-cont sub-cont--button">
						<Button
							size="small"
							text="Click here"
							disabled
							style={{ minWidth: '163px' }}
						/>
						<Button
							size="small"
							text="Click here"
							disabled
							iconPosition="right"
						>
							<IconGrey />
						</Button>
						<Button size="small" text="Click here" disabled iconPosition="left">
							<IconGrey />
						</Button>
						<Button size="small" disabled iconPosition="only" text="Click here">
							<IconGrey />
						</Button>
					</div>
					<h4 className="sub-tit">Outline</h4>
					<div className="sub-cont sub-cont--button">
						<Button
							buttonType="outline"
							size="small"
							text="Click here"
							style={{ minWidth: '163px' }}
						/>
						<Button
							buttonType="outline"
							size="small"
							text="Click here"
							iconPosition="right"
						>
							<IconBlue />
						</Button>
						<Button
							buttonType="outline"
							size="small"
							text="Click here"
							iconPosition="left"
						>
							<IconBlue />
						</Button>
						<Button
							buttonType="outline"
							size="small"
							iconPosition="only"
							text="Click here"
						>
							<IconBlue />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CommonButton;
