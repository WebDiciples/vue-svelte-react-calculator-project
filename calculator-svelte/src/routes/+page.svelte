<script>
	import Header from "$lib/header.svelte";
	import DigitsButtons from "$lib/digits.svelte";
	import OperatorsButtons from "$lib/operator.svelte";
	import ScreenDisplay from "$lib/screen_display.svelte";

	let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", `-`, "0", "."];
	let operators = ["+", "-", "*", "/", "="];
	let current = "";
	let result = "";

	function updateCurrent(param) {
		// If "=" is clicked, evaluate the expression
		if (param === "=") {
			calculate(current);
			current = "";
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
		current += param;
		calculate(current);
	}

	function clearAllField() {
		current = "";
		result = "";
	}

	function backspace() {
		current = current.slice(0, -1);
		calculate(current);
	}

	function calculate(param) {
		result = eval(param);
	}
</script>

<section
	class="bg-30 dark:bg-dark-30 text-black dark:text-white h-2/5 p-2 grid"
>
	<Header />
	<ScreenDisplay {current} {result} />
</section>
<section
	class="flex h-3/5 p-2 bg-60 dark:bg-dark-60 text-black dark:text-white"
>
	<div class="left_container w-4/5">
		<div class="grid grid-cols-3 h-1/5">
			<button
				class="grid place-items-center text-10 dark:text-dark-10 text-xl group"
				on:click={() => clearAllField()}
			>
				<span class="group-active:scale-75"> c </span>
			</button>
			<button
				aria-label="button for backspace"
				class="grid place-items-center text-10 dark:text-dark-10 text-xl group"
				on:click={() => backspace()}
			>
				<span class="group-active:scale-75">
					<i class="bi bi-backspace"></i>
				</span>
			</button>
			<button
				class="grid place-items-center text-10 dark:text-dark-10 text-xl group"
				on:click={() => updateCurrent(`%`)}
			>
				<span class="group-active:scale-75"> % </span>
			</button>
		</div>

		<div class="digits_buttons grid grid-cols-3 h-4/5">
			{#each digits as digit}
				<DigitsButtons on:click={() => updateCurrent(digit)} {digit} />
			{/each}
		</div>
	</div>

	<div class="right_container grid grid-cols-1 w-1/4">
		{#each operators as operator}
			<OperatorsButtons on:click={() => updateCurrent(operator)} {operator} />
		{/each}
	</div>
</section>
