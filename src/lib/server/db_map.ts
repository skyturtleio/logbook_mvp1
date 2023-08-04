const db = new Map();

interface Todo {
	id: string;
	description: string;
	done: boolean;
}

export function getTodos(userId: string): Todo[] {
	if (!db.get(userId)) {
		db.set(userId, [
			{
				id: crypto.randomUUID(),
				description: 'Learn SvelteKit',
				done: false,
			},
		]);
	}

	return db.get(userId);
}

export function createTodo(userId: string | undefined, description: string | null) {
	const todos: Todo[] = db.get(userId);
	let defaultDescription;

	if (!description) {
		defaultDescription = 'default';
	}

	todos.push({
		id: crypto.randomUUID(),
		description: description,
		done: false,
	});
}

export function deleteTodo(userId: string, todoId: string) {
	const todos: Todo[] = db.get(userId);
	const index = todos.findIndex((t) => t.id === todoId);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}
