// Factory Function
function CarFactory(type) {
  // Create car objects based on type
  if (type === "sedan") {
    return {
      type: "sedan",
      wheels: 4,
      doors: 4,
      description: "A small car for personal use.",
    };
  } else if (type === "SUV") {
    return {
      type: "SUV",
      wheels: 4,
      doors: 5,
      description: "A bigger car for family trips.",
    };
  } else if (type === "truck") {
    return {
      type: "truck",
      wheels: 6,
      doors: 2,
      description: "A heavy vehicle for transporting goods.",
    };
  } else {
    return { type: "unknown", description: "Type not available." };
  }
}

// Usage
const car1 = CarFactory("sedan");
console.log(car1); // { type: 'sedan', wheels: 4, doors: 4, description: 'A small car for personal use.' }

const car2 = CarFactory("SUV");
console.log(car2); // { type: 'SUV', wheels: 4, doors: 5, description: 'A bigger car for family trips.' }

const car3 = CarFactory("bike"); // Invalid type
console.log(car3); // { type: 'unknown', description: 'Type not available.' }
