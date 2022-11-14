import { ChangeEvent, useState, useContext } from 'react';
import { Box, Button, TextField } from '@mui/material';

import SaveIcon from '@mui/icons-material/Save';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { EntriesContext } from '../../context/entries';

export const NewEntry = () => {

  const { addNewEntry } = useContext(EntriesContext)

  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);

  const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    setIsAdding(false);
    setInputValue('');
    setTouched(false);
  }

  return (
    <Box sx={{ marginBottom: 2, paddingY: 2 }}>
      {
        isAdding ? (
          <>
            <TextField
              fullWidth
              sx={{ marginTop: 2, marginBottom: 1 }}
              autoFocus
              multiline
              placeholder='Nueva Tarea'
              label='Nueva Tarea'
              helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
              error={inputValue.length <= 0 && touched}
              value={inputValue}
              onChange={onTextFieldChanged}
              onBlur={() => setTouched(true)}
            />

            <Box display='flex' justifyContent='space-between'>
              <Button variant='text'
                onClick={() => {
                  setIsAdding(false);
                  setInputValue('');
                  setTouched(false);
                }}
              >
                Cancelar
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                endIcon={<SaveIcon />}
                onClick={onSave}
              >
                Guardar
              </Button>
            </Box>
          </>
        ) :
          (
            <Button
              fullWidth
              variant='outlined'
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => setIsAdding(true)}
            >
              Agregar Tarea
            </Button>
          )
      }




    </Box>
  )
}
