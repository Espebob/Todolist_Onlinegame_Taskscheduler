// Define a Task object
function Task(description, category) 
{
    this.description = description;
    this.category = category;
    this.isCompleted = false;
  }
  
  // Define a To-Do List object
  function ToDoList() {
    this.tasks = {}; // Object to store tasks grouped by category
  }
  
  // Add a task to the list
  ToDoList.prototype.addTask = function(task) 
 {
    if (!this.tasks[task.category]) {
      this.tasks[task.category] = [];
    }
    this.tasks[task.category].push(task);
  };
  
  // Display tasks grouped by category
  ToDoList.prototype.displayTasks = function()
 {
    for (const category in this.tasks) {
      console.log(`\nCategory: ${category}`);
      for (const task of this.tasks[category]) {
        console.log(`- ${task.description} (${task.isCompleted ? 'completed' : 'pending'})`);
      }
    }
  };
  
  // Mark a task as completed
  ToDoList.prototype.markTaskCompleted = function(description, category) 
  {
    for (const tasks of Object.values(this.tasks)) {
      for (const task of tasks) {
        if (task.description === description && task.category === category)
        {
          task.isCompleted = true;
          return;
        }
      }
    }
    console.log(`Task '${description}' not found in category '${category}'`);
  };
  
  // Remove a task from the list
  ToDoList.prototype.removeTask = function(description, category) {
    for (const tasks of Object.values(this.tasks)) {
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].description === description && tasks[i].category === category)
         {
            tasks.splice(i,1);
          return;
        }
      }
    }
    console.log(`Task '${description}' not found in category '${category}'`);
  };
  
  // Example usage
  const todoList = new ToDoList();
  
  todoList.addTask(new Task("Buy groceries", "Errands"));
  todoList.addTask(new Task("Finish homework", "School"));
  todoList.addTask(new Task("Clean the house", "Chores"));
  todoList.addTask(new Task("Pay bills", "Finances"));
  
  
  //todoList.displayTasks();

  todoList.markTaskCompleted("Buy groceries", "Errands");

  //todoList.displayTasks();
  
  todoList.removeTask("Finish homework", "School");
  
  //todoList.displayTasks();

  todoList.addTask(new Task("Volunteer with children", "charity"));

  todoList.displayTasks();
  