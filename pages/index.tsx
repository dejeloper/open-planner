import type { NextPage } from "next";
import { Grid, Card, CardHeader } from "@mui/material";
import { Layouts } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layouts title="Home - Open Planner">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="Pendientes" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="En Progreso" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vh - 100px )" }}>
            <CardHeader title="Finalizado" />
          </Card>
        </Grid>
      </Grid>
    </Layouts>
  );
};

export default HomePage;
