// The prototype for all characters
const characterPrototype = {
  name: "Unknown",
  health: 100,
  strength: 50,
  abilities: [],

  attack() {
    console.log(`${this.name} attacks with strength ${this.strength}!`);
  },
};

// Creating a Warrior prototype by cloning the base character
const warriorPrototype = Object.create(characterPrototype);
warriorPrototype.name = "Warrior";
warriorPrototype.strength = 80;
warriorPrototype.abilities = ["Sword Mastery", "Shield Block"];

// Creating a Mage prototype by cloning the base character
const magePrototype = Object.create(characterPrototype);
magePrototype.name = "Mage";
magePrototype.health = 70;
magePrototype.strength = 40;
magePrototype.abilities = ["Fireball", "Teleport"];

// Creating new characters using prototypes
const warrior1 = Object.create(warriorPrototype);
warrior1.name = "Aragon"; // Customizing for a specific character
warrior1.attack(); // Output: Aragon attacks with strength 80!

const mage1 = Object.create(magePrototype);
mage1.name = "Gandalf"; // Customizing for a specific character
mage1.attack(); // Output: Gandalf attacks with strength 40!
