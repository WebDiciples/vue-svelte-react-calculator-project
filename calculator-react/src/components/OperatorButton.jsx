function OperatorButton({ onClick, operator }) {
	return (
		<button
			onClick={onClick}
			className={`grid place-items-center text-10 dark:text-dark-10 text-xl group ${
				operator === "="
					? "bg-10 dark:bg-dark-10 text-white dark:text-white rounded"
					: ""
			}`}>
			<span className="group-active:scale-75"> {operator} </span>
		</button>
	);
}
export default OperatorButton;
