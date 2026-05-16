import { useState } from "react";
import TaskForm from "../Components/TaskForm";
import TaskList from "../Components/TaskList";
import { sampleTasks } from "../Interfaces/taskModel";

function HomePage() {
  const [tasks, setTasks] = useState(sampleTasks);

  const handleAddTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
    };

    setTasks([newTask, ...tasks]);
  };

  return (
    <main className="page">
      <section className="page-header">
        <h1>Görev Takip Uygulaması</h1>
        <p>Günlük görevleri listelemek için hazırlanan basit React projesi.</p>
      </section>

      <section className="task-section">
        <div className="section-title">
          <h2>Yeni Görev</h2>
        </div>
        <TaskForm onAddTask={handleAddTask} />
      </section>

      <section className="task-section">
        <div className="section-title">
          <h2>Görev Listesi</h2>
          <span>{tasks.length} görev</span>
        </div>
        <TaskList tasks={tasks} />
      </section>
    </main>
  );
}

export default HomePage;
