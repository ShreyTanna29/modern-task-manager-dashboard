import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  createdAt: number;
  dueDate: string | null;
}

interface TaskState {
  tasks: Task[];
  searchQuery: string;
  sortBy: "createdAt" | "priority" | "title" | "incomplete";
  sortOrder: "asc" | "desc";
}

const initialState: TaskState = {
  tasks: JSON.parse(localStorage.getItem("tasks") || "[]"),
  searchQuery: "",
  sortBy: "createdAt",
  sortOrder: "asc",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, "id" | "createdAt">>) => {
      const newTask = {
        ...action.payload,
        id: Date.now().toString(),
        createdAt: Date.now(),
      };
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = action.payload;
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action: PayloadAction<TaskState["sortBy"]>) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<TaskState["sortOrder"]>) => {
      state.sortOrder = action.payload;
    },
  },
});

export const {
  addTask,
  deleteTask,
  toggleTask,
  updateTask,
  setSearchQuery,
  setSortBy,
  setSortOrder,
} = taskSlice.actions;
export default taskSlice.reducer;
