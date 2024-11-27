// Subject (the thing being observed)
class Newsletter {
  constructor() {
    this.subscribers = []; // List of observers
  }

  // Subscribe to the newsletter
  subscribe(observer) {
    this.subscribers.push(observer);
  }

  // Unsubscribe from the newsletter
  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter((sub) => sub !== observer);
  }

  // Notify all subscribers
  notify(message) {
    this.subscribers.forEach((observer) => observer.update(message));
  }
}

// Observer (the one observing)
class Subscriber {
  constructor(name) {
    this.name = name;
  }

  // This gets called when the newsletter sends a notification
  update(message) {
    console.log(`${this.name} received: ${message}`);
  }
}

// Usage
const newsletter = new Newsletter();

// Create subscribers
const john = new Subscriber("John");
const jane = new Subscriber("Jane");

// Subscribe them to the newsletter
newsletter.subscribe(john);
newsletter.subscribe(jane);

// Send a notification
newsletter.notify("New article published!");

// Unsubscribe Jane and send another notification
newsletter.unsubscribe(jane);
newsletter.notify("Another article is out!");
