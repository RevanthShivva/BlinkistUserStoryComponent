import { Grid, Typography } from "@mui/material";
import React from "react";
import BookCard from "../../molecules/BookCard";
type Bookcard = {
  author: string;
  name: string;
};

interface Props {
  data?: Bookcard[];
}

const MyLibrary = ({ data }: Props) => {
  return (
    <Grid>
      <Grid item>
        <Typography>My Library</Typography>
      </Grid>
      <Grid direction="row">
        {data?.map((eachbook: Bookcard, index: number) => {
          return <BookCard author={eachbook.author} name={eachbook.name} />;
        })}
      </Grid>
    </Grid>
  );
};

export default MyLibrary;
