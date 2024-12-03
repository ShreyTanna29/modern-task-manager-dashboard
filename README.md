# Modern Task Manager

A sleek and efficient task management application built with React, TypeScript, and Vite.

## Basic Features
1. Task Input: Add tasks with a title
2. Task Deletion: Delete tasks
3. Task Persistence: Persist tasks in local storage

## Stretch Goals
1. Task Search: Use a search bar to find tasks
2. Task Completion: Mark tasks as completed
3. Priority Setting: Assign a priority level to tasks
4. Task Sorting: Sort tasks by various criteria
5. UI Animation: Improve user interface with animations

## Extra features from my side
- Editing a task: after creation of a task, a user can edit/update it.
- dark mode and light mode themes.

## Tech Stack
- React 18
- TypeScript
- Vite
- Redux Toolkit
- TailwindCSS
- clsx + tailwind-merge for styling


## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modern-task-manager.git
```

2. Install dependencies:
 ```bash
cd modern-task-manager
```
```bash
npm install
```
3. Run in dev mode.
```bash
npm run dev
```

## Project Structure
```bash
📦 Root
├── 📂 src/
│   ├── 📂 lib/
│   │   └── utils.ts                # Styling utilities with clsx and tailwind-merge
│   │
│   ├── 📂 store/
│   │   ├── store.ts                # Redux store setup with tasks and theme reducers
│   │   ├── taskSlice.ts            # Task management with CRUD, search, and sorting
│   │   └── themeSlice.ts           # Theme switching and persistence logic
│   │
│   ├── 📂 components/              # React components

```



## Images and video of the app
![Screenshot from 2024-11-16 16-00-26](https://github.com/user-attachments/assets/6f26545d-ec81-4d6f-9cd8-eb5f88eb5697)



![Screenshot from 2024-11-16 16-00-15](https://github.com/user-attachments/assets/b0f538ae-a2eb-4e2d-ac70-4c139157d555)



[Screencast from 2024-11-16 16-00-52.webm](https://github.com/user-attachments/assets/33f186fb-435e-4bed-8633-f8e081c50503)

