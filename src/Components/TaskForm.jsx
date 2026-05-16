import { useEffect, useState } from "react";
import { emptyTask, taskStatuses } from "../Interfaces/taskModel";

function TaskForm({ editingTask, onAddTask, onUpdateTask, onCancelEdit }) {
  const [formData, setFormData] = useState(emptyTask);
  const isEditing = Boolean(editingTask);

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        status: editingTask.status,
      });
    } else {
      setFormData(emptyTask);
    }
  }, [editingTask]);

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

    const savedTask = {
      ...formData,
      title: formData.title.trim(),
      description: formData.description.trim(),
    };

    if (isEditing) {
      onUpdateTask(editingTask.id, savedTask);
    } else {
      onAddTask(savedTask);
    }

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

      <div className="form-row">
        <label htmlFor="status">Durum</label>
        <select
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value={taskStatuses.pending}>Bekliyor</option>
          <option value={taskStatuses.completed}>Tamamlandı</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit">
          {isEditing ? "Görevi Güncelle" : "Görev Ekle"}
        </button>
        {isEditing && (
          <button type="button" className="secondary-button" onClick={onCancelEdit}>
            İptal
          </button>
        )}
      </div>
    </form>
  );
}

export default TaskForm;
