class Counter {
  // Private static property to hold the single instance
  static #instance = null;

  constructor() {
    if (Counter.#instance) {
      // Prevent further instantiation
      throw new Error("You can only create one instance of Counter!");
    }
    Counter.#instance = this; // Assign this instance to the static property
    this.count = 0; // Initialize the counter
  }

  // Method to get the single instance
  static getInstance() {
    if (!Counter.#instance) {
      new Counter(); // Create instance if it doesn't exist
    }
    return Counter.#instance;
  }

  // Increment method
  increment() {
    this.count++;
    return this.count;
  }

  // Decrement method
  decrement() {
    this.count--;
    return this.count;
  }
}

// Usage of the Singleton Pattern
try {
  const counter1 = Counter.getInstance();
  console.log(counter1.increment()); // Output: 1
  console.log(counter1.increment()); // Output: 2

  const counter2 = Counter.getInstance();
  console.log(counter2.decrement()); // Output: 1

  // Verifying both instances are the same
  console.log(counter1 === counter2); // Output: true

  // Attempt to create a new instance directly will throw an error
  const counter3 = new Counter(); // Error: You can only create one instance of Counter!
} catch (error) {
  console.error(error.message);
}
