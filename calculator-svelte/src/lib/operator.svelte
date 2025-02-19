<script>
	export let operator;
</script>

<button
	on:click
	class="grid place-items-center text-10 dark:text-dark-10 text-xl group"
	class:bg-10={operator === "="}
	class:dark:bg-dark-10={operator === "="}
	class:text-white={operator === "="}
	class:dark:text-white={operator === "="}
	class:rounded={operator === "="}
>
	<span class="group-active:scale-75">
		{operator}
	</span>
</button>
