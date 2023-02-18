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

