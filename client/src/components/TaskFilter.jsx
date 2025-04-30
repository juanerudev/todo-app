const TaskFilter = ({ filter, setFilter }) => {
    const filters = ['all', 'completed', 'pending'];
  
    return (
      <div className="flex justify-center gap-2 mb-4">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${
              filter === f
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {f === 'all' ? 'Todas' : f === 'completed' ? 'Completadas' : 'Pendientes'}
          </button>
        ))}
      </div>
    );
  };
  
  export default TaskFilter;
  