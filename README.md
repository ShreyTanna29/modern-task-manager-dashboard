# Modern Task Manager

A sleek and efficient task management application built with React, TypeScript, and Vite.


## check live site
https://modern-task-manager-dashboard.vercel.app/


## Basic Features
1. Task Input: Add tasks with a title
2. Task Deletion: Delete tasks

## Stretch Goals
1. Task Search: Use a search bar to find tasks
2. Task Completion: Mark tasks as completed
3. Priority Setting: Assign a priority level to tasks
4. Task Sorting: Sort tasks by various criteria
5. UI Animation: Improve user interface with animations

## Extra features from my side
- dark mode and light mode themes.
- Task Persistence: Persist tasks in local storage
- more sort functionality.

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



## Images of the app



![Screenshot from 2024-12-03 18-16-57](https://github.com/user-attachments/assets/ce716167-c040-4519-984a-9009c240d91e)

![Screenshot from 2024-12-03 18-16-43](https://github.com/user-attachments/assets/bb9759cd-4961-4649-813d-ae55e48c7267)


![Screenshot from 2024-12-03 18-42-49](https://github.com/user-attachments/assets/79cb38de-b14f-4aea-b9b7-1ebcaeec50ab)

![Screenshot from 2024-12-03 18-42-43](https://github.com/user-attachments/assets/a8f5cbd0-b6eb-46e4-a786-a9f49c2eaa57)
