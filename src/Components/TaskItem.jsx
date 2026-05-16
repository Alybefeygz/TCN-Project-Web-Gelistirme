function TaskItem({ task, onEditTask, onDeleteTask }) {
  const isCompleted = task.status === "Tamamlandı";

  return (
    <li className="task-item">
      <div className="task-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <div className="task-actions">
        <span className={isCompleted ? "status completed" : "status pending"}>
          {task.status}
        </span>
        <button type="button" onClick={() => onEditTask(task)}>
          Düzenle
        </button>
        <button
          type="button"
          className="danger-button"
          onClick={() => onDeleteTask(task.id)}
        >
          Sil
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
