var TodoList = /** @class */ (function () {
    function TodoList() {
        this.todos = [];
        this.currentId = 1;
    }
    TodoList.prototype.addTask = function (task) {
        this.todos.push({ id: this.currentId++, task: task });
        this.renderTodos();
    };
    TodoList.prototype.removeTask = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
        this.renderTodos();
    };
    TodoList.prototype.renderTodos = function () {
        var todoListElement = document.getElementById("todoList");
        todoListElement.innerHTML = this.todos.length
            ? this.todos
                .map(function (todo) { return "<li class=\"mb-2 flex justify-between\">".concat(todo.id, ": ").concat(todo.task, "\n               <button class=\"bg-red-500 text-white px-2 py-1 rounded ml-4\" onclick=\"todoList.removeTask(").concat(todo.id, ")\">Remove</button></li>"); })
                .join('')
            : "<li>No tasks available</li>";
    };
    TodoList.prototype.showTodos = function () {
        console.log(this.todos.length ? this.todos : "No tasks available.");
    };
    return TodoList;
}());
var todoList = new TodoList();
document.addEventListener("DOMContentLoaded", function () {
    var _a, _b;
    (_a = document.getElementById("addTaskButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var taskInput = document.getElementById("taskInput");
        if (taskInput.value.trim()) {
            todoList.addTask(taskInput.value.trim());
            taskInput.value = "";
        }
    });
    (_b = document.getElementById("showTasksButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        todoList.showTodos();
    });
});
