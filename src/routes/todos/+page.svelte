<script lang="ts">
	export let data;
</script>

<div>
	<h1>Todos</h1>

	<form method="post">
		<label for="description">
			Description
			<input id="description" name="description" type="text" />
		</label>
	</form>

	<ul>
		{#each data.todos as todo (todo.id)}
			<li>
				{todo.description}
			</li>
		{/each}
	</ul>
</div>
