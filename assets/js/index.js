import TaskManager from './taskManager.js';


const taskManager = new TaskManager();


const validFormFieldInput = event => {
    event.preventDefault(); // Prevent form submission
  
    const taskNameInput = document.querySelector('#taskNameInput');
    const taskName = taskNameInput.value;
  
    const descriptionInput = document.querySelector('#descriptionInput');
    const description = descriptionInput.value;
  
    const assignInput = document.querySelector('#assignInput');
    const assignTo = assignInput.value;
  
    const datePickerInput = document.querySelector('#datePickerInput');
    const dueDate = datePickerInput.value;
  
    // Hide all error alerts
    const errorAlerts = document.querySelectorAll('.error-alert');
    errorAlerts.forEach(alert => {
      alert.classList.add('d-none');
    });
  
    // Check if any field is empty
    if (taskName === '') {
      // Show error alert for task name
      const taskNameErrorAlert = document.querySelector('#taskNameErrorAlert');
      taskNameErrorAlert.classList.remove('d-none');
    }
  
    if (description === '') {
      // Show error alert for description
      const descriptionErrorAlert = document.querySelector('#descriptionErrorAlert');
      descriptionErrorAlert.classList.remove('d-none');
    }
  
    if (assignTo === '') {
      // Show error alert for assign to
      const assignToErrorAlert = document.querySelector('#assignToErrorAlert');
      assignToErrorAlert.classList.remove('d-none');
    }
  
    if (dueDate === '') {
      // Show error alert for due date
      const dueDateErrorAlert = document.querySelector('#dueDateErrorAlert');
      dueDateErrorAlert.classList.remove('d-none');
    }
  
    // Check if all fields are filled
    if (taskName !== '' && description !== '' && assignTo !== '' && dueDate !== '') {
      console.log(`Task Name: ${taskName}`);
      console.log(`Description: ${description}`);
      console.log(`Assign To: ${assignTo}`);
      console.log(`Due Date: ${dueDate}`);
  
    taskManager.addTask(taskName, description, assignTo, dueDate);

      // Call render method
      taskManager.render();

      // Reset the form
      taskForm.reset();

       // Log the new task data
      console.log('New Task:', taskManager._tasks[taskManager._tasks.length - 1]);
    }
  }
  
  // Select the Task List
  const tasksList = document.getElementById('task-list');

  // // Add an Event Listener to the Task List
  // tasksList.addEventListener('click', (event) => {
  //   // Check if the target's classList contains 'done-button'
  //   if (event.target.classList.contains('done-button')) {
  //     const parentTask = event.target.closest('[data-task-id]');
  //     const taskId = parentTask.dataset.taskId;
  //     console.log(taskId);
  //   }
  // });


  // Get the form element
  const taskForm = document.querySelector('#taskForm');

  // Add event listener to the form's submit event
  taskForm.addEventListener('submit', validFormFieldInput);
  
  
  console.log(taskManager._tasks);