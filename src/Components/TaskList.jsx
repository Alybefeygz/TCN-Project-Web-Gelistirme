import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  if (!tasks.length) {
    return <p className="empty-message">Henüz görev eklenmedi.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
