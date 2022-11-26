import Project from "./components/Projects/Project";
import Task from "./components/Task/Task";


export const Routs = [
	{
		path: "/task",
		Component: <Task />,
	},
	{
		path: "/",
		Component: <Project />,
	},
];
