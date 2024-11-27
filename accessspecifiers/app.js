var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    User.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Age: ").concat(this.getAge(), ", Gender: ").concat(this.getGender());
    };
    User.prototype.getAge = function () {
        return this.age; // Only accessible within the class
    };
    User.prototype.getGender = function () {
        return this.gender; // Accessible within the class and subclasses
    };
    return User;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, gender, employeeId) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.getEmployeeDetails = function () {
        return "".concat(this.getDetails(), ", Employee ID: ").concat(this.employeeId);
    };
    return Employee;
}(User));
// Creating an object of Employee
var employee = new Employee('Paarisha', 22, 'Female', 12345);
// Display details in the browser
var personDetails = document.getElementById('personDetails');
if (personDetails) {
    personDetails.textContent = employee.getEmployeeDetails();
}
