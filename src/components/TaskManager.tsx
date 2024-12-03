import React from "react";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { RootState } from "../store/store";
import TaskInput from "./TaskInput";
import TaskSearch from "./TaskSearch";
import TaskSort from "./TaskSort";
import TaskItem from "./TaskItem";
import { Task } from "../store/taskSlice";

const TaskManager: React.FC = () => {
  const { tasks, searchQuery, sortBy, sortOrder } = useSelector(
    (state: RootState) => state.tasks
  );

  const getSortValue = (task: Task, key: string) => {
    switch (key) {
      case "title":
        return task.title.toLowerCase();
      case "priority":
        const priorityOrder = { low: 0, medium: 1, high: 2 };
        return priorityOrder[task.priority];
      case "incomplete":
        return task.completed ? 1 : 0;
      case "dueDate":
        return task.dueDate ? new Date(task.dueDate).getTime() : Infinity;
      default:
        return task.createdAt;
    }
  };

  const filteredAndSortedTasks = tasks
    .filter((task) =>
      task.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aValue = getSortValue(a, sortBy);
      const bValue = getSortValue(b, sortBy);
      const modifier = sortOrder === "asc" ? 1 : -1;

      if (typeof aValue === "string") {
        return (aValue as string).localeCompare(bValue as string) * modifier;
      }
      return ((aValue as number) - (bValue as number)) * modifier;
    });

  return (
    <div className="max-w-4xl mx-auto space-y-4 md:space-y-8 px-4 md:px-6">
      <section className="bg-card rounded-lg shadow-lg p-4 md:p-6 dark:bg-slate-800 ">
        <TaskInput />
      </section>

      <section className="bg-card rounded-xl shadow-lg p-4 md:p-6 space-y-4 dark:bg-slate-800 ">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <TaskSearch />
          </div>
          <div className="w-full sm:w-auto">
            <TaskSort />
          </div>
        </div>

        <motion.div layout className="space-y-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredAndSortedTasks.length > 0 ? (
              filteredAndSortedTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            ) : (
              <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8 text-muted-foreground"
              >
                {searchQuery ? "No tasks found" : "No tasks added yet"}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

export default TaskManager;
