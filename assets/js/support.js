// Get the search input element
const searchInput = document.getElementById('search');

// Add an event listener for input changes
searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.toLowerCase();
  const tasks = document.getElementsByClassName('list-group-item');

  // Iterate through each task and check if it matches the search text
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const taskText = task.textContent.toLowerCase();

    // Show or hide the task based on the search text match
    if (taskText.includes(searchText)) {
      task.style.display = 'block';  // Show the task
    } else {
      task.style.display = 'none';   // Hide the task
    }
  }
});