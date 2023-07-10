import CommonButton from '~/components/uio/CommonButton';
import CommonInput from '~/components/uio/CommonInput';
import CommonSelectionTools from '~/components/uio/CommonSelectionTools';
import '~/assets/scss/pages/_components.scss';

function Components() {
	return (
		<div className="common">
			<h1 className="common__tit">Components</h1>
			<div className="common__cont">
				<CommonButton />
				<CommonInput />
				<CommonSelectionTools />
			</div>
		</div>
	);
}

export default Components;
