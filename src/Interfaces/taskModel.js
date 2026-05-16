export const taskStatuses = {
  pending: "Bekliyor",
  completed: "Tamamlandı",
};

export const sampleTasks = [
  {
    id: 1,
    title: "Proje planını incele",
    description: "Proje kurallarını ve yapılacak adımları gözden geçir.",
    status: taskStatuses.pending,
  },
  {
    id: 2,
    title: "Klasör yapısını hazırla",
    description: "Components, Pages ve Interfaces klasörlerini oluştur.",
    status: taskStatuses.completed,
  },
  {
    id: 3,
    title: "Görev listesini oluştur",
    description: "Örnek görevleri ekranda listelemek için hazırlık yap.",
    status: taskStatuses.pending,
  },
];

export const emptyTask = {
  title: "",
  description: "",
  status: taskStatuses.pending,
};
