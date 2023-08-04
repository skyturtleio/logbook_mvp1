const db = new Map();

interface Todo {
	id: string;
	description: string;
	done: boolean;
}

export function getTodos(userId: string | undefined): Todo[] {
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

export function createTodo(userId: string | undefined, description: string) {
	const todos: Todo[] = db.get(userId);

	if (!userId) {
		throw new Error('Todo must have an associated userId');
	}

	if (!description || description === null) {
		throw new Error('Todo must have description');
	}

	if (description === '') {
		throw new Error("Description can't be empty");
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
