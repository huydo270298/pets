interface ToastifyPropType {
	type: 'success' | 'error';
	name: string;
	message: string;
	isBtn?: boolean;
	handleClick?: (value: boolean) => void;
}
function Toastify({
	type,
	name,
	message,
	isBtn = false,
	handleClick,
}: ToastifyPropType) {
	return (
		<div className={`toast-wrap ${type}`}>
			<div className="toast-cont">
				<div className="icon">
					{type === 'success' && (
						<>
							<span className="line tip" />
							<span className="line long" />
							<div className="placeholder" />
							<div className="fix" />
						</>
					)}
					{type === 'error' && (
						<>
							<span className="mark" />
							<span className="line left" />
							<span className="line right" />
						</>
					)}
				</div>
				<h2 className="name">{name}</h2>
				<p className="message">{message}</p>
				{isBtn && handleClick && (
					<button
						type="button"
						className="toast-btn"
						onClick={() => handleClick(false)}
					>
						OK
					</button>
				)}
			</div>
		</div>
	);
}

export default Toastify;
