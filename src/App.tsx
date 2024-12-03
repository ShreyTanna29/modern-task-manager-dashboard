import React, { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';
import { RootState } from './store/store';
import TaskManager from './components/TaskManager';
import ThemeToggle from './components/ThemeToggle';
import { Card } from './components/ui/card';
import { LayoutDashboard } from 'lucide-react';

const ThemeInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-200">
      {children}
    </main>
  );
};

const AppContent: React.FC = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-900">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-slate-800/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-5xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <LayoutDashboard className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h1 className="text-lg sm:text-2xl font-bold text-primary">Task Dashboard</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-4 overflow-x-hidden sm:py-8 px-4 sm:px-6">
        <div className="grid gap-4 sm:gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4  ">
            <Card className="flex flex-col justify-between p-3 sm:p-4 dark:bg-slate-800">
              <h3 className="text-sm sm:text-base font-medium text-muted-foreground">Total Tasks</h3>
              <div className="text-xl sm:text-3xl font-bold text-primary mt-1">{totalTasks}</div>
            </Card>
            <Card className="flex flex-col justify-between p-3 sm:p-4 dark:bg-slate-800">
              <h3 className="text-sm sm:text-base font-medium text-muted-foreground">Completed</h3>
              <div className="text-xl sm:text-3xl font-bold text-green-600 mt-1">{completedTasks}</div>
            </Card>
            <Card className="flex flex-col justify-between p-3 sm:p-4 dark:bg-slate-800">
              <h3 className="text-sm sm:text-base font-medium text-muted-foreground">Pending</h3>
              <div className="text-xl sm:text-3xl font-bold text-orange-600 mt-1">{pendingTasks}</div>
            </Card>
          </div>

          <TaskManager />
        </div>
      </main>
    </div>
  );
};



const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeInitializer>
        <AppContent />
      </ThemeInitializer>
    </Provider>
  );
};

export default App;
