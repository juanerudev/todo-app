import { useEffect, useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import { getTasks, createTask, updateTask, deleteTask } from './services/taskService';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAdd = async (task) => {
    const { data: newTask } = await createTask(task);
    setTasks([newTask, ...tasks]);
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((task) => task._id !== id));
  };

  const handleToggle = async (task) => {
    const updatedTask = { ...task, completed: !task.completed };
    const { data } = await updateTask(task._id, updatedTask);
    setTasks(tasks.map((t) => (t._id === task._id ? data : t)));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-4 shadow-lg rounded bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center">To-Do List</h1>
      <TaskForm onAdd={handleAdd} />
      <TaskFilter filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} onDelete={handleDelete} onToggle={handleToggle} />
    </div>
  );
}

export default App;
