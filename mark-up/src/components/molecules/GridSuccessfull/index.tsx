import { Grid, IconButton, Stack, Typography } from '@mui/material';
import { ButtonComponent } from '../../atoms/Button';
import rightClick from "./test conducted.svg";

const GridSuccessfull = () => {
  return (
    <Stack flexDirection="column">
      <Stack alignItems="flex-start">
          <IconButton  />
        </Stack>
        <Stack alignItems="center">
         <img src={rightClick} alt ="right"></img>
        </Stack>
        <Typography />
        <Typography />
        <Stack alignItems="center">
          <ButtonComponent />
        </Stack>
    </Stack>
  )
}

export default GridSuccessfull;