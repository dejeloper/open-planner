import { createContext } from "react";
import { Entry } from "../../interfaces";

interface ContextProps {
  entries: Entry[];
  // Métodos
  addNewEntry: (description: string) => void;
  updateEntry: (entry: Entry, showSnackBar: boolean) => void;
  deleteEntry: (entry: Entry) => void;
}

export const EntriesContext = createContext({} as ContextProps);
