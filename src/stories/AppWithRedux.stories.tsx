import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import App from "../App";
import {Provider} from "react-redux";
import {store} from "../state/store";
import {ReduxStoreProviderDecorator} from "../state/ReduxStoreProviderDecorator";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'TODOLISTS/AddItemForm',
	component: App,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	decorators: [ReduxStoreProviderDecorator]
} as ComponentMeta<typeof App>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof App> = (args) => <App/>

export const AppStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

