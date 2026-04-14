const TaskItem = ({ task, onUpdate, onDelete }) => {
  return (
    <div className="task">
      <h3
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.title}
      </h3>

      <p>{task.description}</p>

      <button
        onClick={() => onUpdate(task._id, { completed: !task.completed })}
      >
        {task.completed ? "Undo" : "Complete"}
      </button>

      <button onClick={() => onDelete(task._id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
