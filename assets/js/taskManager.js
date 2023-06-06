const createTasksHtml = (id, name, description, assignedTo, dueDate, status) => {
  const isTaskDone = status !== 'TODO';
  const doneButtonClass = isTaskDone ? 'btn done-button d-none' : 'btn done-button';

  return `
    <li class="list-group-item flex-grow-1 col-12 col-md-6 col-xl-4">
      <div class="card h-100">
        <div class="card">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${name}</h5>
            <div class="d-flex justify-content-between align-items-start mb-2">
              <div>
                <p class="card-subtitle mb-2">${description}</p>
                <p class="card-subtitle mb-2"><strong>Assign To:</strong> ${assignedTo}</p>
                <p class="card-subtitle mb-2"><strong>Due Date:</strong> ${dueDate}</p>
                <p class="card-subtitle mb-2">${status}</p>
              </div>
              <div class="d-flex flex-column align-items-start">
                <button class="btn ${doneButtonClass}" data-task-id="${id}">Mark Done</button>
                <button class="btn delete-button mt-2 align-self-stretch">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  `;
};

// Test if the Function createsTasksHTML works
const taskHtml = createTasksHtml('Get Gas', 'Go to the gas station and get gas', 'Me', '05/03/2023');
console.log(taskHtml);

class TaskManager {
  constructor(currentId = 0) {
    this._tasks = [];
    this._currentId = currentId;
  }
  
  addTask(name, description, assignedTo, dueDate, status = 'TODO') {
    const task = {
      id: this._currentId++,
      name,
      description,
      assignedTo,
      dueDate,
      status
    };
    this._tasks.push(task);
  }

  deleteTask(taskId) {
    const newTasks = [];
    for (let i = 0; i < this._tasks.length; i++) {
      const task = this._tasks[i];
      if (task.id !== taskId) {
        newTasks.push(task);
      }
    }
    this._tasks = newTasks;
  }

  render() {
    const tasksHtmlList = [];
    this._tasks.forEach((task) => {
      const date = new Date(task.dueDate);
      // Changing date to string and keeping numbers as they are.
      const month = date.toLocaleString('default', { month: 'short' });
      const day = date.getDate();
      const year = date.getFullYear();
      const formattedDate = `${month} ${day}, ${year}`;

      const taskHtml = createTasksHtml(
        task.id,
        task.name,
        task.description,
        task.assignedTo,
        formattedDate,
        task.status
      );
      tasksHtmlList.push(taskHtml);
    });
    const tasksHtml = tasksHtmlList.join('\n');

    const taskList = document.getElementById('task-list');
    taskList.innerHTML = tasksHtml;

  }

  updateTaskStatus(taskId, status) {
    const task = this.getTaskById(taskId);
    if (task) {
      task.status = status;
      this.render();
    }
  }

  getTaskById(taskId) {
    return this._tasks.find((task) => task.id === taskId) || null;
  }

  save() {
    const tasksJson = JSON.stringify(this._tasks);
    localStorage.setItem('tasks', tasksJson);

    const currentId = String(this._currentId);
    localStorage.setItem('currentId', currentId); 
  }
  load() {
    const tasksJson = localStorage.getItem('tasks');
    if (tasksJson) {
      this._tasks = JSON.parse(tasksJson);
    }

    const currentId = localStorage.getItem('currentId');
    if (currentId) {
      this._currentId = parseInt(currentId);
    }
  }
}


export default TaskManager;
