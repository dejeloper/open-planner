import { Grid, Card, CardHeader, CardActions, CardContent, TextField, Button } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import { Layouts } from "../../components/layouts"

export const EntryPage = () => {
  return (
    <Layouts title="... .">
      <Grid
        container
        justifyContent="center"
        sx={{ marginTop: 2 }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title="Tarea:" subheader={`Creada hace ... minutos`} />
            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder="Nueva Tarea"
                autoFocus
                multiline
                label="Nueva Tarea"
              />


            </CardContent>

            <CardActions>
              <Button startIcon={<SaveOutlinedIcon />}
                variant="contained"
                fullWidth
              >
                Save
              </Button>
            </CardActions>

          </Card>
        </Grid>

      </Grid>
    </Layouts>
  )
}

export default EntryPage;