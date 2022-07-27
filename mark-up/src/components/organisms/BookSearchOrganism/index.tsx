import { Grid, Typography } from "@mui/material";
import React from "react";
import BookSearchBar from "../../molecules/BookSearchBar";
import BookSearchCard from "../../molecules/BookSearchCard";
import Banner from "./banner.svg";
type bookItems = {
  icon1: string;
  image1: string;
  bookName: string;
  author: string;
};

interface Props {
  data?: bookItems[];
}
const BookSearchOrganism = ({ data }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const SearchBooks: any = () => {
    // add search funtionality
  };
  return (
    <Grid flexDirection="column">
      <Grid item>
        <img src={Banner} alt=""></img>
      </Grid>
      <Grid item>
        <Typography />
      </Grid>
      <Grid item>
        <BookSearchBar />
      </Grid>
      <Grid item>
        {data?.map((eachbook: bookItems, index: number) => {
          return (
            <BookSearchCard
              icon1={eachbook.icon1}
              image1={eachbook.image1}
              author={eachbook.author}
              bookName={eachbook.bookName}
            ></BookSearchCard>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default BookSearchOrganism;
