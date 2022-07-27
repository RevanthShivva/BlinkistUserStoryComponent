import { Grid, Typography } from '@mui/material';
import React from 'react'
import IconButtonComponent from '../../atoms/Icons';

const Iconlabel = () => {
  return (
    <Grid>
    <Grid item>
      <IconButtonComponent />
    </Grid>
    <Grid item>
      <Typography />
    </Grid>
  </Grid>
  )
}

export default Iconlabel;
