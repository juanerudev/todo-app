const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
      <div className="flex items-center justify-between p-2 bg-gray-100 rounded mb-2">
        <div
          onClick={() => onToggle(task)}
          className={`cursor-pointer ${task.completed ? 'line-through text-gray-400' : ''}`}
        >
          {task.title}
        </div>
        <button
          onClick={() => onDelete(task._id)}
          className="bg-red-500 text-white rounded px-2 py-1"
        >
          Eliminar
        </button>
      </div>
    );
  };
  
  export default TaskItem;
  