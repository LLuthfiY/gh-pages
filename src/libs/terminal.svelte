<script>
	import TerminalLine from './terminal-line.svelte';
	export let initData = `{
        name : "Luthfi",
        gender: "Male",
        greeting: "Hai i'am Luthfi, i am a Programmer"
    }`;
	let numrows = ['data.greeting'];
	let globalString = `let logs = [];
    let data = ${initData}
    
    `;

	/**
	 *
	 * @param {number} ms
	 */
	const sleep = async (ms) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	const focusToLastInput = () => {
		const inputs = document.querySelectorAll('textarea');
		const lastInput = inputs[inputs.length - 1];
		lastInput.focus();
	};

	const clearTerminal = async () => {
		numrows = [];
		await sleep(10);
		numrows = [''];
	};
	const addTerminalLine = () => {
		numrows = [...numrows, ''];
	};

	/**
	 *
	 * @param {String} newString
	 */
	const addGlobalString = (newString) => {
		const regConst = /const.*=/g;
		const regLet = /let.*=/g;
		const regVar = /var.*=/g;
		const regChange = /[^!=]=[^=]/g;

		if (regConst.test(newString)) {
			globalString = globalString + newString + '\n';
		} else if (regLet.test(newString)) {
			globalString = globalString + newString + '\n';
		} else if (regVar.test(newString)) {
			globalString = globalString + newString + '\n';
		} else if (regChange.test(newString)) {
			globalString = globalString + newString + '\n undefined \n';
		}
		// console.log(globalString);
	};
</script>

<div
	class="terminal flex flex-column pa4 cursor-text bgAlt z-999 h-100 w-100 "
    
>
	<div id="terminal-head" class=" flex ">
		<!-- <p class=" font-mono text-chalk-orange">fake-js-console by LLuth</p> -->
		<div class=" flex ml-auto">
			<div class=" w-[1rem] h-[1rem] bg-chalk-green rounded-full mx-1 my-auto" />
			<div class=" w-[1rem] h-[1rem] bg-chalk-yellow rounded-full mx-1 my-auto" />
			<div class=" w-[1rem] h-[1rem] bg-chalk-red rounded-full mx-1 my-auto" />
		</div>
	</div>
	<div id="terminal-body" class="terminal-body p-4 overflow-auto sc3 thumb-rounded flex-grow">
		{#each numrows as row}
			<TerminalLine
				{clearTerminal}
				{addTerminalLine}
				{addGlobalString}
				{globalString}
				initialValue={row}
			/>
		{/each}
	</div>
</div>