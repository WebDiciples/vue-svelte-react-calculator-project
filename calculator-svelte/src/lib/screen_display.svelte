<script>
	export let current = "";
	export let result = "";
</script>

<div class="self-end">
	<input
		type="text"
		readonly
		bind:value={current}
		class="border-none outline-none w-full h-10 text-right text-base text-opacity-95 bg-transparent"
	/>
	<input
		type="text"
		readonly
		bind:value={result}
		class="border-none outline-none w-full h-10 text-right text-2xl font-bold bg-transparent"
	/>
</div>
