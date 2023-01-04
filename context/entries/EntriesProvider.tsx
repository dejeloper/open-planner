import { FC, useEffect, useReducer } from "react";
import { useSnackbar } from 'notistack';

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
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>('/entries', { description });
      dispatch({ type: '[Entry] - Add-Entry', payload: data })

    } catch (error) {
      console.log(error)
    }
  }

  const updateEntry = async ({ _id, description, status }: Entry, showSnackBar: boolean = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });
      dispatch({ type: '[Entry] - Updated-Entry', payload: data });

      if (showSnackBar)
        enqueueSnackbar('Tarea Actualizada', {
          variant: 'success',
          autoHideDuration: 1500,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'right'
          }
        });

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
