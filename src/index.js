import "./styles.css";
import { testTasks } from "./test-tasks.js";
import { Clipboard, Task, List } from "./task-logic.js";

console.log("Running a webpack test")



window.addEventListener("DOMContentLoaded", function() {
	
	console.log(Task);
	const allTasks = Clipboard();
	testTasks.forEach(object => {
		const project = new List(object.project);
		(object.taskList).forEach(task => {
			project.addTask(task);
		});
		allTasks.addList(project);
	});
	console.log(allTasks.getContents());

	/* const thing = new Task("Pet my dog", "Make sure to do this in the sunshine", "03-10-2025", "low", "no notes");
	const project = new List("Household chores");

	console.log(thing);
	console.log(project);
	thing.update("title", "Pet the cat");
	console.log(thing); */
});