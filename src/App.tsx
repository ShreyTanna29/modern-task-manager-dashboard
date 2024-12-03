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
        <div className="max-w-5xl mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold text-primary">Task Dashboard</h1>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-5xl mx-auto py-8 px-4">
        <div className="grid gap-6">
          <div className="grid gap-4 md:grid-cols-3">
            <Card className="p-4 dark:bg-slate-800">
              <h3 className="font-semibold mb-2">Total Tasks</h3>
              <div className="text-3xl font-bold text-primary">{totalTasks}</div>
            </Card>
            <Card className="p-4 dark:bg-slate-800">
              <h3 className="font-semibold mb-2">Completed</h3>
              <div className="text-3xl font-bold text-green-600">{completedTasks}</div>
            </Card>
            <Card className="p-4 dark:bg-slate-800">
              <h3 className="font-semibold mb-2">Pending</h3>
              <div className="text-3xl font-bold text-orange-600">{pendingTasks}</div>
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
