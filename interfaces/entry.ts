export interface Entry {
  _id: string;
  description: string;
  status: EntryStatus;
  createAt: number;
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished'