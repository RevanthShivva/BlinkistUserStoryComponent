import { Grid, Stack, Typography } from "@mui/material";
import ExploreIcons from "../../molecules/ExploreIcons";

type icons1 = {
  icon: string;
  name: string;
};

interface Props {
  data?: icons1[];
}

const ExploreMenu = ({ data }: Props) => {
  return (
    <Stack>
      <Stack flexDirection="row">
        <Typography></Typography>
        <Typography></Typography>
        <Typography></Typography>
      </Stack>
      <Stack>
        {data?.map((eachbook: icons1, index: number) => {
          return (
            <Grid item>
              <ExploreIcons icon={eachbook.icon} name={eachbook.name} />
            </Grid>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default ExploreMenu;
