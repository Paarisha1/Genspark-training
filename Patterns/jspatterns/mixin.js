// A mixin that adds logging functionality
const LoggerMixin = {
  logInfo(message) {
    console.log(`INFO: ${message}`);
  },
  logError(message) {
    console.error(`ERROR: ${message}`);
  },
};

// A class that uses the mixin
class User {
  constructor(name) {
    this.name = name;
  }
}

// Add the mixin's methods to the User class
Object.assign(User.prototype, LoggerMixin);

// Usage
const user = new User("John Doe");
user.logInfo("This is an informational message."); // INFO: This is an informational message.
user.logError("This is an error message."); // ERROR: This is an error message.
