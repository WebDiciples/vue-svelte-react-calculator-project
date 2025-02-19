import { useState } from "react";
import Header from "./components/Header.jsx";
import DigitButton from "./components/DigitButton.jsx";
import OperatorButton from "./components/OperatorButton.jsx";
import ScreenDisplay from "./components/ScreenDisplay.jsx";
import "./App.css";

function App() {
	const [current, setCurrent] = useState("");
	const [result, setResult] = useState("");

	let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", `-`, "0", "."];
	let operators = ["+", "-", "*", "/", "="];

	function updateCurrent(param) {
		// If "=" is clicked, evaluate the expression
		if (param === "=") {
			calculate(current);
			setCurrent("");
			return;
		}

		// Prevent multiple consecutive operators
		const lastChar = current.slice(-1);
		if (
			["+", "-", "*", "/", "."].includes(param) &&
			["+", "-", "*", "/", "."].includes(lastChar)
		) {
			return; // Ignore the new operator
		}

		// Prevent starting with an operator (except "-")
		if (current === "" && ["+", "*", "/", "."].includes(param)) {
			return;
		}

		// Prevent adding multiple "." in the current number
		if (param === ".") {
			// Split the input by operators to get the current number segment
			const segments = current.split(/[\+\-\*\/]/);
			const lastSegment = segments[segments.length - 1];

			// Prevent adding "." if the last number already has one
			if (lastSegment.includes(".")) return;
		}
		// Add the input character to the current string
		setCurrent((prev) => {
			const updatedCurrent = prev + param; // New value of current
			calculate(updatedCurrent);
			return updatedCurrent; // Return the new current value
		});
	}

	function clearAllField() {
		setCurrent("");
		setResult("");
	}

	function backspace() {
		setCurrent((prev) => {
			const updatedCurrent = prev.slice(0, -1); // New value of current
			calculate(updatedCurrent);
			return updatedCurrent; // Return the new current value
		});
	}

	function calculate(param) {
		try {
			if (param.trim() !== "") {
				setResult(eval(param).toLocaleString("fr-FR"));
			} else {
				setResult(""); // Default to 0 if the expression is empty
			}
		} catch (error) {
			console.error("Invalid expression:", error);
			// setResult("Error");
		}
	}

	return (
		<>
			<section className="bg-30 dark:bg-dark-30 text-black dark:text-white h-2/5 p-2 grid">
				<Header />
				<ScreenDisplay current={current} result={result} />
			</section>
			<section className="flex h-3/5 p-2 bg-60 dark:bg-dark-60 text-black dark:text-white">
				<div className="left_container w-4/5">
					<div className="grid grid-cols-3 h-1/5">
						<button
							className="grid place-items-center text-10 dark:text-dark-10 text-xl group"
							onClick={() => clearAllField()}>
							<span className="group-active:scale-75"> c </span>
						</button>
						<button
							aria-label="button for backspace"
							className="grid place-items-center text-10 dark:text-dark-10 text-xl group"
							onClick={() => backspace()}>
							<span className="group-active:scale-75">
								<i className="bi bi-backspace"></i>
							</span>
						</button>
						<button
							className="grid place-items-center text-10 dark:text-dark-10 text-xl group"
							onClick={() => updateCurrent(`%`)}>
							<span className="group-active:scale-75"> % </span>
						</button>
					</div>

					<div className="digits_buttons grid grid-cols-3 h-4/5">
						{digits.map((digit, index) => {
							return (
								<DigitButton
									onClick={() => updateCurrent(digit)}
									key={index}
									digit={digit}
								/>
							);
						})}
					</div>
				</div>

				<div className="right_container grid grid-cols-1 w-1/4">
					{operators.map((operator, index) => {
						return (
							<OperatorButton
								onClick={() => updateCurrent(operator)}
								key={index}
								operator={operator}
							/>
						);
					})}
				</div>
			</section>
		</>
	);
}

export default App;
