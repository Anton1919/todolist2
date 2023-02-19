import axios from "axios";

const settings = {
	withCredentials: true,
	headers: {
		"API-KEY": "82e04a93-e2e9-41a4-ac2e-ccde52c0a988"
	}
}

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.1/",
	...settings
})

export type TodolistType = {
	id: string
	title: string
	addedDate: string
	order: number
}

type ResponseType<D = {}> = {
	resultCode: number
	message: string[]
	data: D
}

export type TaskType = {
	description: string
	title: string
	status: number
	priority: number
	startDate: string
	deadline: string
	id: string
	todoListId: string
	order: number
	addedDate: string
}

type GetTasksResponse = {
	error: string | null
	totalCount: number
	items: TaskType[] | []
}

export type UpdateTaskType = {
	title: string
	description: string
	status: number
	priority: number
	startDate: string
	deadline: string
}

type UpdateTaskModel = {
	title: string
	description: string
	status: number
	priority: number
	startDate: string
	deadline: string
}

export const todolistsApi = {

	getTodolists() {
		return instance.get<TodolistType[]>("todo-lists")
	},

	createTodolist(title: string) {
		return instance.post<ResponseType<{ item: TodolistType }>>("todo-lists", {title})
	},

	deleteTodolist(id: string) {
		return instance.delete<ResponseType>(`todo-lists/${id}`)
	},

	updateTodolist(id: string, title: string) {
		return instance.put<ResponseType>(`todo-lists/${id}`, {title})
	},

	getTasks(todolistId: string) {
		return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
	},

	deleteTask(todolistId: string, taskId: string) {
		return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`)
	},

	createTask(todolistId: string, taskTitle: string) {
		return instance.post<ResponseType<TaskType>>(`todo-lists/${todolistId}/tasks/`, {title: taskTitle})
	},

	updateTask(todolistId: string, taskId: string, model: UpdateTaskModel) {
		return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, model)
	}
}