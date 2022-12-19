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
      description: "Primera Tarea de Ejemplo.",
      status: "finished",
      createAt: Date.now(),
    },
    {
      description: "Segunda Tarea de Ejemplo.",
      status: "in-progress",
      createAt: Date.now() + 100000,
    },
    {
      description: "Tercera Tarea de Ejemplo.",
      status: "pending",
      createAt: Date.now() + 300000,
    }
  ]
}