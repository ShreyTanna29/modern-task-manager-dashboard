import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Task, updateTask, deleteTask, toggleTask } from "../store/taskSlice";
import { Button } from "./ui/button";
import { CalendarIcon, Pencil, Trash2 } from "lucide-react";

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleUpdate = () => {
    dispatch(updateTask(editedTask));
    setIsEditing(false);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        opacity: { duration: 0.2 },
        layout: { duration: 0.3, type: "spring" },
      }}
      className={`bg-card ${task.priority === "high"
        ? "bg-red-300  "
        : task.priority === "medium"
          ? "bg-orange-200 "
          : "bg-green-200 "
        } text-card-foreground rounded-lg shadow p-4 dark:text-black transition-colors`}
    >
      {isEditing ? (
        <motion.div layout className="flex gap-4">
          <input
            type="date"
            value={editedTask.dueDate || ''}
            onChange={(e) =>
              setEditedTask({ ...editedTask, dueDate: e.target.value })
            }
            className="p-2 border rounded-md bg-background text-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          />
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) =>
              setEditedTask({ ...editedTask, title: e.target.value })
            }
            className="flex-1 p-2 border rounded-md bg-background text-foreground"
          />
          <select
            value={editedTask.priority}
            onChange={(e) =>
              setEditedTask({
                ...editedTask,
                priority: e.target.value as "low" | "medium" | "high",
              })
            }
            className="p-2 border rounded-md bg-background text-foreground"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <Button onClick={handleUpdate}>Save</Button>
        </motion.div>
      ) : (
        <motion.div layout className="flex items-center gap-4">

          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTask(task.id))}
            className="h-5 w-5"
          />
          <span
            className={`flex-1 ${task.completed ? "line-through text-muted-foreground" : ""
              }`}
          >
            {task.title}
          </span>
          {task.dueDate && (
            <div className="flex items-center gap-2 ml-auto">
              <CalendarIcon className="h-4 w-4 " />
              <span className={`text-sm font-medium ${new Date(task.dueDate) < new Date()
                ? 'text-red-600 dark:text-red-400'
                : 'text-black'
                }`}>
                {new Date(task.dueDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
            </div>
          )}
          <span
            className={`px-2 py-1 rounded-md text-sm ${task.priority === "high"
              ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
              : task.priority === "medium"
                ? "bg-orange-100 text-yellow-800 dark:bg-orange-900 dark:text-orange-200"
                : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              }`}
          >
            {task.priority}
          </span>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            <Pencil />
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={() => dispatch(deleteTask(task.id))}
          >
            <Trash2 />
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TaskItem;
