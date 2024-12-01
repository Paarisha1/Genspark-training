import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TaskInput } from "../components/Input";

describe("TaskInput", () => {


  it("calls onAddTask with input value when button is clicked", () => {
   
    const onAddTask = vi.fn();
    render(<TaskInput onAddTask={onAddTask} />);
    const input = screen.getByLabelText("Add a Task");
    const button = screen.getByRole("button", { name: "Add Task" });
    
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

 
    expect(onAddTask).toHaveBeenCalledWith("New Task");
  });

  it("clears input after adding a task", () => {
  
    const onAddTask = vi.fn();
    render(<TaskInput onAddTask={onAddTask} />);
    const input = screen.getByLabelText("Add a Task");
    const button = screen.getByRole("button", { name: "Add Task" });

   
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(input).toHaveValue("");
  });
});
