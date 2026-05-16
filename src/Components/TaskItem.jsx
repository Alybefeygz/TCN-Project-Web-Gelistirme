function TaskItem({ task }) {
  const isCompleted = task.status === "Tamamlandı";

  return (
    <li className="task-item">
      <div>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
      </div>
      <span className={isCompleted ? "status completed" : "status pending"}>
        {task.status}
      </span>
    </li>
  );
}

export default TaskItem;
