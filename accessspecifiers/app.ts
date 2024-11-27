class User {
    public name: string;        // Public access
    private age: number;        // Private access
    protected gender: string;   // Protected access

    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    public getDetails(): string {
        return `Name: ${this.name}, Age: ${this.getAge()}, Gender: ${this.getGender()}`;
    }

    private getAge(): number {
        return this.age; // Only accessible within the class
    }

    protected getGender(): string {
        return this.gender; // Accessible within the class and subclasses
    }
}

class Employee extends User {
    private employeeId: number;

    constructor(name: string, age: number, gender: string, employeeId: number) {
        super(name, age, gender);
        this.employeeId = employeeId;
    }

    public getEmployeeDetails(): string {
        return `${this.getDetails()}, Employee ID: ${this.employeeId}`;
    }
}

// Creating an object of Employee
const employee = new Employee('Paarisha', 22, 'Female', 12345);

// Display details in the browser
const personDetails = document.getElementById('personDetails');
if (personDetails) {
    personDetails.textContent = employee.getEmployeeDetails();
}

