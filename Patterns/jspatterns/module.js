const CounterModule = (function () {
  // Private variables and functions
  let count = 0;

  function privateMethod() {
    console.log("This is a private method.");
  }

  // Public methods
  return {
    increment: function () {
      count++;
      console.log(`Count is now: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Count is now: ${count}`);
    },
    reset: function () {
      count = 0;
      console.log(`Count has been reset.`);
    },
    getCount: function () {
      return count; // Expose the count
    },
  };
})();

// Usage
CounterModule.increment(); // Count is now: 1
CounterModule.increment(); // Count is now: 2
console.log(CounterModule.getCount()); // 2
CounterModule.reset(); // Count has been reset.
// CounterModule.privateMethod(); // Error: privateMethod is not accessible
