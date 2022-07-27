import { Grid, Typography } from "@mui/material";
import IconButtonComponent from "../../atoms/Icons";

interface Props {
  icon?: string;
  name?: string;
}

const ExploreIcons = ({ name }: Props) => {
  return (
    <Grid>
      <Grid item>
        <IconButtonComponent />
      </Grid>
      <Grid item>
        <Typography>{name}</Typography>
      </Grid>
    </Grid>
  );
};

export default ExploreIcons;
