import axios from "axios";

const settings = {
	withCredentials: true,
	headers: {
		"API-KEY": "82e04a93-e2e9-41a4-ac2e-ccde52c0a988"
	}
}

export const todolistsApi = {

	getTodolists() {
		const promise = axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
		return promise
	},

	createTodolist(title: string) {
		const promise = axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title}, settings)
		return promise
	},

	geleteTodolist(id: string) {
		const promise = axios.delete("https://social-network.samuraijs.com/api/1.1/todo-lists/" + id, settings)
		return promise
	},

	updateTodolist(id: string, title: string) {
		const promise = axios.put("https://social-network.samuraijs.com/api/1.1/todo-lists/" + id, {title}, settings)
		return promise
	}

}