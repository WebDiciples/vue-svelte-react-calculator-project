<script>
	export let digit;
</script>

<button on:click class="grid place-items-center text-xl group">
	{#if digit == "-"}
		<span class="group-active:scale-75">
			<i class="bi bi-plus-slash-minus"></i>
		</span>
	{:else}
		<span class="group-active:scale-75">
			{digit}
		</span>
	{/if}
</button>
