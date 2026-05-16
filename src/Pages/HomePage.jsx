import TaskList from "../Components/TaskList";
import { sampleTasks } from "../Interfaces/taskModel";

function HomePage() {
  return (
    <main className="page">
      <section className="page-header">
        <h1>Görev Takip Uygulaması</h1>
        <p>Günlük görevleri listelemek için hazırlanan basit React projesi.</p>
      </section>

      <section className="task-section">
        <div className="section-title">
          <h2>Görev Listesi</h2>
          <span>{sampleTasks.length} görev</span>
        </div>
        <TaskList tasks={sampleTasks} />
      </section>
    </main>
  );
}

export default HomePage;
