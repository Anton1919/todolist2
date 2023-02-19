import React, {ChangeEvent, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Task} from "../Task";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'TODOLISTS/Task',
	component: Task,
	args: {
		task: {id: 'id task', isDone: true, title: "js"},
		todolistId: "title todo",
		changeTaskStatus: action("changeTaskStatus"),
		changeTaskTitle: action("changeTaskTitle"),
		removeTask: action("removeTask")
	}
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const TaskIsNotDoneStory = Template.bind({});

TaskIsNotDoneStory.args = {
	task: {id: 'id task 2', isDone: false, title: "css"},
};


const Template1: ComponentStory<typeof Task> = (args) => {
	const [task, setTask] = useState({id: 'id task', isDone: true, title: "js"})

	const changeTaskStatus = (taskId: string, newIsDoneValue: boolean, todolistId: string) => {
		setTask({...task, isDone: newIsDoneValue})
	}

	const changeTaskTitle = (taskId: string, title: string, todolistId: string) => {
		setTask({...task, title: title})
	}

	const removeTask = () => {
		return action('removed')
	}

	return <Task
		task={task}
		todolistId={'ffgh'}
		changeTaskStatus={changeTaskStatus}
		changeTaskTitle={changeTaskTitle}
		removeTask={action('removed')}
	/>
};

export const WorkTaskStory = Template1.bind({})