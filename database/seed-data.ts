interface SeedData {
  entries: SeedEntry[];
}


interface SeedEntry {
  description: string;
  status: string;
  createAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: Qui mollit ex anim sint laborum.",
      status: "pending",
      createAt: Date.now(),
    },
    {
      description:
        "En Progreso: Ut amet exercitation anim velit laboris pariatur deserunt labore laboris in.",
      status: "in-progress",
      createAt: Date.now() + 100000,
    },
    {
      description:
        "Finalizada: Nostrud et dolor dolor dolore laboris aliquip sit consequat consequat.",
      status: "finished",
      createAt: Date.now() + 300000,
    },
  ]
}