import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/taskSlice";
import { Button } from "./ui/button";

const TaskInput: React.FC = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"low" | "medium" | "high">("medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(
        addTask({
          title: title.trim(),
          completed: false,
          priority,
          dueDate: dueDate || null,
        })
      );
      setTitle("");
      setDueDate("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-2 border rounded-md bg-background text-foreground min-w-0 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <div className="flex gap-4">
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="p-2 border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <select
            value={priority}
            onChange={(e) =>
              setPriority(e.target.value as "low" | "medium" | "high")
            }
            className="p-2 border rounded-md bg-background text-foreground w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>
          <Button type="submit" className="w-full sm:w-auto">
            Add Task
          </Button>
        </div>
      </div>
    </form>
  );
};

export default TaskInput;
