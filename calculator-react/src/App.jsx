import { useState } from "react";
import Header from "./components/Header.jsx";
import DigitButton from "./components/DigitButton.jsx";
import OperatorButton from "./components/OperatorButton.jsx";
import ScreenDisplay from "./components/ScreenDisplay.jsx";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	let current = "";
	let result = "";

	let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", `-`, "0", "."];
	let operators = ["+", "-", "*", "/", "="];
	return (
		<>
			<section class="bg-30 dark:bg-dark-30 text-black dark:text-white h-2/5 p-2 grid">
				{/* <Header />
				<ScreenDisplay /> */}
			</section>
			<section class="flex h-3/5 p-2 bg-60 dark:bg-dark-60 text-black dark:text-white">
				<div class="left_container w-4/5">
					<div class="grid grid-cols-3 h-1/5">
						<button
							class="grid place-items-center text-10 dark:text-dark-10 text-xl group"
							onClick={() => clearAllField()}>
							<span class="group-active:scale-75"> c </span>
						</button>
						<button
							aria-label="button for backspace"
							class="grid place-items-center text-10 dark:text-dark-10 text-xl group"
							onClick={() => backspace()}>
							<span class="group-active:scale-75">
								<i class="bi bi-backspace"></i>
							</span>
						</button>
						<button
							class="grid place-items-center text-10 dark:text-dark-10 text-xl group"
							onClick={() => updateCurrent(`%`)}>
							<span class="group-active:scale-75"> % </span>
						</button>
					</div>

					<div class="digits_buttons grid grid-cols-3 h-4/5">
						{digits.map((digit) => {
							<DigitButton onClick={() => updateCurrent(digit)} digit={digit} />;
						})}
					</div>
				</div>

				<div class="right_container grid grid-cols-1 w-1/4">
					{operators.map((operator) => {
						<OperatorButton
							onClick={() => updateCurrent(operator)}
							operator={operator}
						/>;
					})}
				</div>
			</section>
		</>
	);
}

export default App;
