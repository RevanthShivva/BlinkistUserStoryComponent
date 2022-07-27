import { Grid, Icon, Typography } from '@mui/material';
import React from 'react'

interface Props {
  icon1? : string;
  image1?: string;
  bookName?: string;
  author?: string;
}

const BookSearchCard = ({ image1, bookName, author} : Props) => {
  return (
    <Grid direction="row">
        <Grid item>
          <Icon></Icon>
        </Grid>
        <Grid item>
          <img src={image1} alt="img" ></img>
        </Grid>
        <Grid item>
          <Grid item>
            <Typography>{ bookName }</Typography>
            <Typography>{ author }</Typography>
          </Grid>
        </Grid>
    </Grid>
  )
}

export default BookSearchCard;