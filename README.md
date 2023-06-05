# Project-task-manager

The code you provided consists of an HTML file (index.html) and two JavaScript files (index.js and taskManager.js). The HTML file contains the structure and layout of a task manager application. The index.js file is responsible for handling user interactions, such as form submissions and rendering tasks. The taskManager.js file contains the TaskManager class, which manages tasks and provides methods for adding, deleting, and updating tasks.

## Here's a breakdown of the code:

### 1. index.html:

* The file starts with the HTML doctype declaration and <html> tag.
* The <head> section contains various meta tags and the title of the document.
* External dependencies are imported, including Bootstrap CSS and JavaScript files.
* The <body> section contains the main content of the task manager application.
* It includes a navigation bar (<nav>) at the top.
* The task manager form is defined within a <section> element.
* A list of tasks is displayed in a <section> element.
* The footer contains additional information.*

### 2. index.js:

* The file imports the TaskManager class from taskManager.js.
* An instance of TaskManager is created.
* The load method is called to load tasks from localStorage.
* The render method is called to display the tasks on the page.
* An event listener is added to the task form's submit event.
* The validFormFieldInput function handles form validation and task creation.
* If all fields are valid, the task is added to the task manager, rendered, and saved to localStorage.
* The form is reset after a task is added.
* The taskManager._tasks property is logged to the console.


### 3. taskManager.js:

* The file defines the TaskManager class.
* The class constructor initializes the tasks property as an empty array.
* The class has methods for adding a task, deleting a task, updating task status, and * rendering tasks.
* The addTask method creates a new task object and adds it to the tasks array.
* The deleteTask method removes a task from the tasks array based on the provided ID.
* The updateTaskStatus method changes the status of a task based on the provided ID.
* The render method generates HTML for each task and updates the task list on the page.
* The save and load methods use localStorage to save and retrieve tasks.
* The class also has some helper functions, such as generating task HTML and generating unique IDs for tasks.


Overall, this code creates a basic task manager application that allows users to add tasks, mark tasks as done, and delete tasks. The tasks are stored in localStorage for persistence.