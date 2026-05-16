import { useState } from "react";
import { emptyTask } from "../Interfaces/taskModel";

function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState(emptyTask);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.title.trim()) {
      return;
    }

    onAddTask({
      ...formData,
      title: formData.title.trim(),
      description: formData.description.trim(),
    });

    setFormData(emptyTask);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="title">Görev başlığı</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="Örn: Ödev dosyasını hazırla"
        />
      </div>

      <div className="form-row">
        <label htmlFor="description">Açıklama</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Görev hakkında kısa açıklama"
          rows="3"
        />
      </div>

      <button type="submit">Görev Ekle</button>
    </form>
  );
}

export default TaskForm;
