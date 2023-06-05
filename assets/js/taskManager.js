const createTasksHtml = (id, name, description, assignedTo, dueDate, status) => {
  const isTaskDone = status !== 'TODO';
  const doneButtonClass = isTaskDone ? 'btn btn-sm done-button bg-danger d-none' : 'btn btn-sm done-button bg-danger';

  return `
    <li class="list-group-item flex-grow-1 col-12 col-md-6 col-xl-4">
      <div class="card h-100">
        <div class="card">
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center">
              <h5 class="card-title">${name}</h5>
              <button class="${doneButtonClass}" data-task-id="${id}">Mark As Done</button>
            </div>
            <p class="card-subtitle mb-2">${description}</p>
            <p class="card-subtitle mb-2"><strong>Assign To:</strong> ${assignedTo}</p>
            <p class="card-subtitle mb-2"><strong>Due Date:</strong> ${dueDate}</p>
            <p class="card-subtitle mb-2">${status}</p>
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

    document.getElementById('task-list').innerHTML = tasksHtml;

    // Add event listener to "Mark As Done" buttons
    const doneButtons = document.querySelectorAll('.done-button');
    doneButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const taskId = parseInt(button.getAttribute('data-task-id'));
        this.updateTaskStatus(taskId, 'Done');
        button.classList.add('d-none');
      });
    });
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
}

const taskManager = new TaskManager();


export default TaskManager;
