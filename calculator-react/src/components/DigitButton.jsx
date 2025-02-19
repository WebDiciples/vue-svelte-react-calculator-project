function DigitButton({ digit, onClick }) {
	return (
		<button onClick={onClick} className="grid place-items-center text-xl group">
			{digit === "-" ? (
				<span className="group-active:scale-75">
					<i className="bi bi-plus-slash-minus"></i>
				</span>
			) : (
				<span className="group-active:scale-75">{digit}</span>
			)}
		</button>
	);
}

export default DigitButton;
