// Model: Represents the data and business logic
class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Business logic method
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  // View: Handles UI-related tasks
  class UserView {
    constructor() {
      this.nameInput = document.getElementById("nameInput");
      this.ageInput = document.getElementById("ageInput");
      this.greetButton = document.getElementById("greetButton");
      this.output = document.getElementById("output");
    }
  
    getUserInput() {
      return {
        name: this.nameInput.value,
        age: this.ageInput.value,
      };
    }
  
    displayGreeting(message) {
      this.output.textContent = message;
    }
  }
  
  // Controller: Handles user input and system events
  class UserController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      // Bind event handlers
      this.view.greetButton.addEventListener("click", () => this.handleGreetUser());
    }
  
    handleGreetUser() {
      const userInput = this.view.getUserInput();
      const user = new User(userInput.name, userInput.age);
      const greeting = user.greet();
      this.view.displayGreeting(greeting);
    }
  }
  
  // App initialization
  document.addEventListener("DOMContentLoaded", () => {
    const view = new UserView();
    const controller = new UserController(null, view);
  });
  