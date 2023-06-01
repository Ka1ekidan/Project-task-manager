class TaskManager{
    constructor(currentId = 1) {
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
}



export default TaskManager;