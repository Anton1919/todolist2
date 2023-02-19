import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistsApi} from "../api/todolists-api";

export default {
	title: 'API'
}

const settings = {
	withCredentials: true,
	headers: {
		"API-KEY": "82e04a93-e2e9-41a4-ac2e-ccde52c0a988"
	}
}

export const GetTodolists = () => {

	const [state, setState] = useState<any>(null)

	useEffect(() => {
		todolistsApi.getTodolists()
			.then((res) => {
				setState(res.data)
			})
		// здесь мы будем делать запрос и ответ закидывать в стейт.
		// который в виде строки будем отображать в div-ке

	}, [])
	return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {

	const [state, setState] = useState<any>(null)

	useEffect(() => {
		todolistsApi.createTodolist("sdf")
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {

	const [state, setState] = useState<any>(null)

	useEffect(() => {
		const todolistId = "3631e2eb-e36d-4913-b61a-4d8228025a3d"
		todolistsApi.geleteTodolist(todolistId)
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		const todolistId = "9fafcd55-6c99-4698-bebe-9f6a1ea72477"
		todolistsApi.updateTodolist(todolistId, 'gga')
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}

export const GetTasks = () => {
	const [state, setState] = useState<any>(null)
	const [todolistId, setTodolistId] = useState<string>("")

	const getTask = () => {

		todolistsApi.getTasks(todolistId)
			.then(res => {
				setState(res.data.items)
			})
	}

	return <div>{JSON.stringify(state)}
		<div>
			<input placeholder={"todolistId"} value={todolistId} onChange={e => setTodolistId(e.currentTarget.value)}/>
			<button onClick={getTask}>get task</button>
		</div>
	</div>

}

export const DeleteTasks = () => {

	const [state, setState] = useState<any>(null)
	const [taskId, setTaskId] = useState<string>("")
	const [todolistId, setTodolistId] = useState<string>("")

	const deleteTask = () => {
		todolistsApi.deleteTask(todolistId, taskId)
			.then(res => {
				setState(res.data)
			})
	}

	return <div>{JSON.stringify(state)}
		<input placeholder={"todolistId"} value={todolistId} onChange={e => setTodolistId(e.currentTarget.value)}/>
		<input placeholder={"taskId"} value={taskId} onChange={e => setTaskId(e.currentTarget.value)}/>
		<button onClick={deleteTask}>delete task</button>
	</div>
}


export const CreateTasks = () => {

	const [state, setState] = useState<any>(null)
	const [taskTitle, setTaskTitle] = useState<string>("")
	const [todolistId, setTodolistId] = useState<string>("")

	const createTask = () => {
		todolistsApi.createTask(todolistId, taskTitle)
			.then(res => {
				setState(res.data)
			})
	}

	return <div>{JSON.stringify(state)}
		<input placeholder={"todolistId"} value={todolistId} onChange={e => setTodolistId(e.currentTarget.value)}/>
		<input placeholder={"taskTitle"} value={taskTitle} onChange={e => setTaskTitle(e.currentTarget.value)}/>
		<button onClick={createTask}>create task</button>
	</div>
}

export const UpdateTasks = () => {

	const [state, setState] = useState<any>(null)
	const [title, setTaskTitle] = useState<string>("title 1")
	const [description, setDescription] = useState<string>("descr 1")
	const [status, setStatus] = useState<number>(0)
	const [priority, setPriority] = useState<number>(0)
	const [startDate, setStartDate] = useState<string>("")
	const [deadline, setDeadline] = useState<string>("")
	const [todolistId, setTodolistId] = useState<string>("")
	const [taskId, setTaskId] = useState<string>("")

	const createTask = () => {
		todolistsApi.updateTask(todolistId, taskId, {
			deadline: '',
			description: description,
			priority: priority,
			startDate: '',
			status: status,
			title: title
		})
			.then(res => {
				setState(res.data)
			})
	}

	return <div>{JSON.stringify(state)}
		<input placeholder={"taskId"} value={taskId} onChange={e => setTaskId(e.currentTarget.value)}/>
		<input placeholder={"todolistId"} value={todolistId} onChange={e => setTodolistId(e.currentTarget.value)}/>
		<input placeholder={"Task Title"} value={title} onChange={e => setTaskTitle(e.currentTarget.value)}/>
		<input placeholder={"Description"} value={description} onChange={e => setDescription(e.currentTarget.value)}/>
		<input placeholder={"status"} value={status} onChange={e => setStatus(+e.currentTarget.value)}/>
		<input placeholder={"priority"} value={priority} onChange={e => setPriority(+e.currentTarget.value)}/>
		<button onClick={createTask}>create task</button>
	</div>
}

