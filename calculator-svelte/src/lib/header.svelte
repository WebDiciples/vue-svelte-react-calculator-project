<script>
	import { onMount } from "svelte";

	// Ensure localStorage is accessed only in the browser
	let is_active = true; // Default to true
	let html_tag;
	
	onMount(() => {
		const storedValue = localStorage.getItem("dark_mode");
		if (storedValue !== null) {
			is_active = JSON.parse(storedValue); // Convert string to boolean
		}

		html_tag = document.querySelector("html");
		html_tag.className = `${is_active ? "dark" : ""}`;
	});

	function toggleMode() {
		is_active = !is_active;
		localStorage.setItem("dark_mode", JSON.stringify(is_active)); // Store as string
		html_tag.className = `${is_active ? "dark" : ""}`;
	}
</script>

<header>
	<button
		aria-label="dark mode toggle button"
		on:click={() => toggleMode(is_active)}
		class="p-2 bg-60 dark:bg-dark-60 rounded-xl w-10 aspect-square shadow-current"
	>
		{#if is_active}
			<i class="bi bi-moon"></i>
		{:else}
			<i class="bi bi-sun"></i>
		{/if}
	</button>
</header>
