import "./styles.css";
import { testTasks } from "./test-tasks.js";

console.log("Running a webpack test")

const Clipboard = () => {
	let contents = [];

	const getContents = () => contents;

	const addList = (list) => {
		contents.push(list);
		return contents;
	};

	return {
		getContents,
		addList
	};
}

class Task {
	constructor(title, description, dueDate, priority, notes) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.notes = notes;
	};
	
	update(element, newValue) {
		this[element] = newValue;
	};
}

class List {
	constructor(name) {
		this.name = name;
		this.taskList = [];
	};

	addTask(task) {
		(this.taskList).push(task);
	};

	removeTask(index) {
		(this.taskList).splice(Number(index), 1);
	};
}

window.addEventListener("DOMContentLoaded", function() {
	
	console.log(testTasks);
	const thing = new Task("Pet my dog", "Make sure to do this in the sunshine", "03-10-2025", "low", "no notes");
	const project = new List("Household chores");

	console.log(thing);
	console.log(project);
	thing.update("title", "Pet the cat");
	console.log(thing);
});