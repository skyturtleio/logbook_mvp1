<script>
	let count = 0;

	function increment() {
		count += 1;
	}

	function reset() {
		count = 0;
	}
</script>

<h1>Counter</h1>

<button on:click={increment}>
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

<br />

<button on:click={reset}> Reset to 0 </button>
