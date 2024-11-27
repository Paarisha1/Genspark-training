// The real counter that does the counting
class Counter {
  constructor() {
    this.count = 0; // Start at 0
  }

  increment() {
    this.count++;
    return this.count;
  }

  decrement() {
    this.count--;
    return this.count;
  }
}

// The middleman (Proxy)
class CounterProxy {
  constructor() {
    this.counter = new Counter(); // The real counter
  }

  performOperation(operation) {
    // Check if the operation is valid (extra safety)
    if (typeof operation !== "function") {
      console.log("Invalid operation. Only valid actions are allowed.");
      return;
    }

    // Write down (log) what’s happening
    console.log("About to perform an operation on the counter...");

    // Do the operation on the real counter
    const result = operation.call(this.counter);

    // Write down what happened
    console.log(`Operation done. Counter is now: ${result}`);
    return result;
  }
}

// Using the counter through the proxy
const proxy = new CounterProxy();

// Ask the middleman to increase the counter
proxy.performOperation(() => proxy.counter.increment()); // Logs and increments

// Ask the middleman to decrease the counter
proxy.performOperation(() => proxy.counter.decrement()); // Logs and decrements

// Try something invalid
proxy.performOperation("Not a valid action!"); // Logs an error
