import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSortBy, setSortOrder } from '../store/taskSlice';
import { RootState } from '../store/store';

const TaskSort: React.FC = () => {
  const dispatch = useDispatch();
  const { sortBy, sortOrder } = useSelector((state: RootState) => state.tasks);

  return (
    <div className="flex gap-2">
      <select
        value={sortBy}
        onChange={(e) => dispatch(setSortBy(e.target.value as any))}
        className="p-2 border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="incomplete">Sort by Pending</option>
        <option value="createdAt">Sort by Date</option>
        <option value="dueDate">Sort by Due Date</option>
        <option value="priority">Sort by Priority</option>
        <option value="title">Sort by Title</option>
      </select>
      <select
        value={sortOrder}
        onChange={(e) => dispatch(setSortOrder(e.target.value as 'asc' | 'desc'))}
        className="p-2 border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};

export default TaskSort;
