import { FC, useReducer } from "react";
import { Entry } from "../../interfaces";
import { EntriesContext, entriesReducer } from "./";
import { v4 as uuidv4 } from "uuid";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Pendiente: Qui mollit ex anim sint laborum.",
      status: "pending",
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        "En Progreso: Ut amet exercitation anim velit laboris pariatur deserunt labore laboris in.",
      status: "in-progress",
      createAt: Date.now() + 100000,
    },
    {
      _id: uuidv4(),
      description:
        "Finalizada: Nostrud et dolor dolor dolore laboris aliquip sit consequat consequat.",
      status: "finished",
      createAt: Date.now() + 300000,
    },
  ],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      status: "pending",
      createAt: Date.now()
    }

    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry })

  }

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - Updated-Entry', payload: entry });
  }

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        // Métodos
        addNewEntry,
        updateEntry,
      }}>
      {children}
    </EntriesContext.Provider>
  );
};
