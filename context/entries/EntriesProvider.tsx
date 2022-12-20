import { FC, useEffect, useReducer } from "react";

import { Entry } from "../../interfaces";
import { entriesApi } from "../../apis";
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: []
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>('/entries', { description });
      dispatch({ type: '[Entry] - Add-Entry', payload: data })

    } catch (error) {
      console.log(error)
    }
  }

  const updateEntry = async ({ _id, description, status }: Entry) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
      dispatch({ type: '[Entry] - Updated-Entry', payload: data });
    } catch (error) {
      console.log(error)
    }
  }

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: '[Entry] - Initial-Entry', payload: data })
  }

  useEffect(() => {
    refreshEntries();
  }, [])


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
