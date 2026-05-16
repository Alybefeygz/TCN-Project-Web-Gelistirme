import { useEffect, useState } from "react";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import { sampleTasks } from "../Interfaces/taskModel";

const STORAGE_KEY = "task-tracker-tasks";

const getInitialTasks = () => {
  const savedTasks = localStorage.getItem(STORAGE_KEY);

  if (savedTasks) {
    return JSON.parse(savedTasks);
  }

  return sampleTasks;
};

function HomePage() {
  const [tasks, setTasks] = useState(getInitialTasks);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
    };

    setTasks([newTask, ...tasks]);
  };

  const handleUpdateTask = (id, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              ...updatedTask,
            }
          : task
      )
    );
    setEditingTask(null);
  };

  const handleDeleteTask = (id) => {
    const isConfirmed = window.confirm("Bu görevi silmek istiyor musunuz?");

    if (isConfirmed) {
      setTasks(tasks.filter((task) => task.id !== id));

      if (editingTask?.id === id) {
        setEditingTask(null);
      }
    }
  };

  return (
    <main className="page">
      <section className="page-header">
        <h1>Görev Takip Uygulaması</h1>
        <p>Günlük görevleri listelemek için hazırlanan basit React projesi.</p>
      </section>

      <section className="task-section">
        <div className="section-title">
          <h2>{editingTask ? "Görevi Düzenle" : "Yeni Görev"}</h2>
        </div>
        <TaskForm
          editingTask={editingTask}
          onAddTask={handleAddTask}
          onUpdateTask={handleUpdateTask}
          onCancelEdit={() => setEditingTask(null)}
        />
      </section>

      <section className="task-section">
        <div className="section-title">
          <h2>Görev Listesi</h2>
          <span>{tasks.length} görev</span>
        </div>
        <TaskList
          tasks={tasks}
          onEditTask={setEditingTask}
          onDeleteTask={handleDeleteTask}
        />
      </section>
    </main>
  );
}

export default HomePage;
