import { Grid, LinearProgress, Stack, Typography } from "@mui/material";
import React from "react";
import BookDetailThumbnail from "../../atoms/BookDetailThumbnail";
import IconButtonComponent from "../../atoms/Icons";
import Iconlabel from "../IconLabel";
import LinearProgressBar from "../../atoms/LinearProgress";
interface Props {
  author?: string;
  name?: string;
}
const BookCard = ({ author, name }: Props) => {
  return (
    <Grid>
      <Grid item>
        <BookDetailThumbnail />
      </Grid>
      <Grid item>
        <Typography>{author}</Typography>
        <Typography>{name}</Typography>
        <Iconlabel />
        <Stack alignItems="flex-end">
          <IconButtonComponent />
        </Stack>
        <LinearProgressBar />
      </Grid>
    </Grid>
  );
};

export default BookCard;
