import * as db from '$lib/server/db_map';

export function load({ cookies }) {
	const id = cookies.get('userId');

	if (!id) {
		cookies.set('userId', crypto.randomUUID(), { path: '/' });
	}

	return {
		todos: db.getTodos(id) ?? [],
	};
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formData();
		db.createTodo(cookies.get('userId'), data.get('description') as string);
	},
};
