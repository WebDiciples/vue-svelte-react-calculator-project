function ScreenDisplay({ current = "", result = "" }) {
	return (
		<div className="self-end">
			<input
				type="text"
				readOnly
				value={current}
				className="border-none outline-none w-full h-10 text-right text-base text-opacity-95 bg-transparent"
			/>
			<input
				type="text"
				readOnly
				value={result}
				className="border-none outline-none w-full h-10 text-right text-2xl font-bold bg-transparent"
			/>
		</div>
	);
}

export default ScreenDisplay;
