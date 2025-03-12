export const Clipboard = () => {
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

export class Task {
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

export class List {
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