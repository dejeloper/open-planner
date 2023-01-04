import { ChangeEvent, useState, useMemo, FC } from 'react';
import { GetServerSideProps } from 'next'
import { capitalize, Grid, Card, CardHeader, CardActions, CardContent, TextField, Button, FormControl, FormLabel, FormControlLabel, Radio, RadioGroup, IconButton } from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Layouts } from "../../components/layouts"
import { EntryStatus } from '../../interfaces';
import { isValidObjectId } from 'mongoose';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];


interface Props {
  // id: string;
}


export const EntryPage: FC = (props) => {

  const [inputValue, setInputValue] = useState('')
  const [status, setStatus] = useState<EntryStatus>('pending')
  const [touched, setTouched] = useState(false)

  const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

  const onInputValueChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  }

  const onSave = () => {
    console.log({ inputValue, status });
  }

  return (
    <Layouts title="... .">
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: 2 }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title={`Tarea: ${inputValue}`} subheader={`Creada hace ... minutos`} />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nueva Tarea"
                autoFocus
                multiline
                label="Nueva Tarea"
                value={inputValue}
                onBlur={() => setTouched(true)}
                onChange={onInputValueChanged}
                helperText={isNotValid && "Ingrese el nombre de la Tarea"}
                error={isNotValid}
              />

              <FormControl>
                <FormLabel>Estado: </FormLabel>
                <RadioGroup
                  row
                  value={status}
                  onChange={onStatusChanged}
                >
                  {
                    validStatus.map(option => (
                      <FormControlLabel
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={capitalize(option)}
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>

            </CardContent>

            <CardActions>
              <Button startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
                onClick={onSave}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>

          </Card>
        </Grid>

      </Grid>

      <IconButton sx={{
        position: 'fixed',
        bottom: 30,
        right: 30,
        backgorundColor: 'secondary'
      }}>
        <DeleteOutlinedIcon />
      </IconButton>

    </Layouts>
  )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {

  const { id } = params as { id: string };

  if (!isValidObjectId(id)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  return {
    props: {
      id
    }
  }
}

export default EntryPage;