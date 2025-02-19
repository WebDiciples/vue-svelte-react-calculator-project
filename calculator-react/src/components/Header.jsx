import { useEffect, useState } from "react";

function Header() {
	const [isActive, setIsActive] = useState(true);

	useEffect(() => {
		// Runs when the component mounts (similar to Svelte's onMount)
		const storedValue = localStorage.getItem("dark_mode");
		if (storedValue !== null) {
			setIsActive(JSON.parse(storedValue)); // Convert string to boolean
		}
	}, []); // Empty dependency array = only runs on mount

	useEffect(() => {
		// Apply the dark mode class to <html> when isActive changes
		document.documentElement.className = isActive ? "dark" : "";
	}, [isActive]); // Runs when isActive changes

	function toggleMode() {
		const newMode = !isActive;
		setIsActive(newMode);
		localStorage.setItem("dark_mode", JSON.stringify(newMode)); // Store as string
	}

	return (
		<header>
			<button
				aria-label="dark mode toggle button"
				onClick={toggleMode}
				className="p-2 bg-60 dark:bg-dark-60 rounded-xl w-10 aspect-square shadow-current">
				{isActive ? <i className="bi bi-moon"></i> : <i className="bi bi-sun"></i>}
			</button>
		</header>
	);
}

export default Header;
