const calculate = async (operation, a, b) => {
  try {
    const mathUtils = await import("./mathUtils.js"); // Dynamically import the module
    if (operation === "add") {
      console.log(mathUtils.add(a, b));
    } else if (operation === "subtract") {
      console.log(mathUtils.subtract(a, b));
    }
  } catch (error) {
    console.error("Error loading module:", error);
  }
};

// Usage
calculate("add", 5, 3); // Output: 8
calculate("subtract", 10, 4); // Output: 6
