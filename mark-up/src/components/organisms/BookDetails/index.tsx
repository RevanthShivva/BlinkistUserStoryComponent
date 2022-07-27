import React from "react";
import { Grid, Typography, Stack } from "@mui/material";
import IconLabel from "../../molecules/IconLabel";
import SecondaryTabs from "../../molecules/SecondaryTabs";
import ButtonComponent from "../../atoms/Button";
import BookDetailThumbnail from "../../atoms/BookDetailThumbnail";
type TabData = {
  tabName: string;
  tabData: string;
};

interface Props {
  data?: TabData[];
  onTabChange?: any;
  value?: any;
}
const BookDetails = ({data} : Props) => {
  return (
    <div>
      <Grid>
        <Grid item>
          <Typography>Book Name</Typography>
          <Typography>Book Tagline</Typography>
          <Typography>Authors</Typography>
          <Stack direction="row">
            <IconLabel />
            <IconLabel />
          </Stack>
          <Stack direction="row">
            <ButtonComponent>Read now</ButtonComponent>
            <ButtonComponent>Buy Book</ButtonComponent>
            <ButtonComponent>Send to Kindle</ButtonComponent>
          </Stack>
          <SecondaryTabs data={data}/>
        </Grid> 
        <Grid item>
          <BookDetailThumbnail />
        </Grid>
      </Grid>
    </div>
  );
};

export default BookDetails;
