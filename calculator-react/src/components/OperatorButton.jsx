function OperatorButton({ onClick, operator }) {
    return (
        <button
            class="grid place-items-center text-10 dark:text-dark-10 text-xl group"
            onClick={onClick}>
            {op}
            <span class="group-active:scale-75"> {operator} </span>
        </button>
    );
}