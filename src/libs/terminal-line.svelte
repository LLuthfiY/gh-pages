<script>
	export let globalString = '';
	export let initialValue = '';

	export let addGlobalString = (/** @type {string} */ newString) => {
		console.log(newString);
	};
	export let addTerminalLine = () => {
		console.log('add terminal line');
	};
	export let clearTerminal = () => {
		console.log('clear terminal');
	};
	let result = '';
	let disable_input = false;

	// @ts-ignore
	const handleKeyDown = (event) => {
		if (event.keyCode == 9) {
			event.preventDefault();
			event.target.value += '\t';
		}
		if (event.keyCode == 13 && event.shiftKey) {
			event.target.value += '\n';
			event.preventDefault();
		} else if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			if (
				event.target.value.trim() === 'clear' ||
				event.target.value.trim() === 'cls' ||
				event.target.value.trim() === 'clear()'
			) {
				clearTerminal();
				return;
			}
			try {
				let elementValue = event.target.value;
				const consoleLog = /console.log/g;
				if (consoleLog.test(elementValue)) {
					elementValue = elementValue.replace(consoleLog, 'logs.push');
					elementValue += ' \n JSON.parse(JSON.stringify(logs))';
				}
				result = JSON.stringify(eval(globalString + elementValue), null, 4);
				addGlobalString(event.target.value);
			} catch (err) {
				// @ts-ignore
				result = err.message;
			}
			
            result = result.trim()
            console.log(result);
			disable_input = true;
			addTerminalLine();
		}
		event.target.style.height = event.target.scrollHeight + 'px';
	};
	if (initialValue !== '') {
		result = JSON.stringify(eval(globalString + initialValue), null, 4);
		disable_input = true;
		addTerminalLine();
	}
</script>

<div>
	<div>
		<div class=" flex ">
			<span class=" fg v-mid"
				>$system/> </span
			>

			<!-- svelte-ignore a11y-autofocus -->
			<textarea
				autofocus
				class=" bg-transparent fg w-100 ml2 pa0"
				tabindex="0"
				on:keydown={handleKeyDown}
				disabled={disable_input}
				value={initialValue}
                style="border: 0; outline:0; caret-shape:block"
			/>
		</div>
	</div>
	<pre class=" fg pl2 mt0 mb4">{result}</pre>
</div>

<style>
    
</style>