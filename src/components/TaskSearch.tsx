import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../store/taskSlice';
import { RootState } from '../store/store';
import { Search } from 'lucide-react';

const TaskSearch: React.FC = () => {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state: RootState) => state.tasks.searchQuery);

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        className="w-full pl-10 pr-4 py-2 border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default TaskSearch;
