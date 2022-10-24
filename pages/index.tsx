import type { NextPage } from "next";
import { Typography } from "@mui/material";
import { Layouts } from "../components/layouts";

const HomePage: NextPage = () => {
  return (
    <Layouts title="Open Planner">
      <Typography variant="h1" color="primary">
        Hola Mundo
      </Typography>
    </Layouts>
  );
};

export default HomePage;
