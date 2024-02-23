// Define a Task class to represent tasks
class Task {
    constructor(title, description, dueDate) {
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.completed = false;
    }
  
    // Function to mark task as completed
    markCompleted() {
      this.completed = true;
    }
  
    // Function to update task details
    updateDetails(newTitle, newDescription, newDueDate) {
      this.title = newTitle;
      this.description = newDescription;
      this.dueDate = newDueDate;
    }
  }
  
  // Define a Scheduler class to manage tasks
  class Scheduler {
    constructor() {
      this.tasks = [];
    }
  
    // Function to add a new task to the scheduler
    addTask(title, description, dueDate) {
      const newTask = new Task(title, description, dueDate);
      this.tasks.push(newTask);
    }
  
    // Function to display tasks sorted by their due dates
    displayTasksSortedByDueDate() {
      const sortedTasks = this.tasks.slice().sort((a, b) => {
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
  
      sortedTasks.forEach(task => {
        console.log(Title: ${task.title}, Due Date: ${task.dueDate}, Completed: ${task.completed});
      });
    }
  
    // Function to update task details or mark tasks as completed
    updateTask(taskIndex, newTitle, newDescription, newDueDate, markAsCompleted = false) {
      const taskToUpdate = this.tasks[taskIndex];
      if (taskToUpdate) {
        if (markAsCompleted) {
          taskToUpdate.markCompleted();
        } else {
          taskToUpdate.updateDetails(newTitle, newDescription, newDueDate);
        }
      } else {
        console.log("Task not found.");
      }
    }
  
    // Function to remove a task from the scheduler
    removeTask(taskIndex) {
      if (taskIndex >= 0 && taskIndex < this.tasks.length) {
        this.tasks.splice(taskIndex, 1);
      } else {
        console.log("Invalid task index.");
      }
    }
  }
  
  // Example usage:
  const scheduler = new Scheduler();
  
  scheduler.addTask("Complete project", "Finish project report and submit it.", "2024-02-28");
  scheduler.addTask("Study for exam", "Review notes and solve practice problems.", "2024-03-05");
  scheduler.addTask("Buy groceries", "Milk, eggs, bread, and fruits.", "2024-02-25");
  console.log("\nDisplay tasks sorted by their due dates..");
  scheduler.displayTasksSortedByDueDate();
  console.log("\nUpdating task details...");
  scheduler.updateTask(0, "Complete projectFinish project report, make necessary edits, and submit it."," ", "2024-03-01");
  scheduler.displayTasksSortedByDueDate();
  
  console.log("\nMarking task as completed...");
  scheduler.updateTask(0, null, null, null, true);
  scheduler.displayTasksSortedByDueDate();
  
  console.log("\nRemoving task...");
  scheduler.removeTask(1);
  scheduler.displayTasksSortedByDueDate();