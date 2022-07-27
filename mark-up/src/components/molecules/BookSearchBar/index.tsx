import React from "react";
import { Box } from "@mui/material";
import Search from "./searchicon.svg";

interface Props {
  onClick?: any;
}
const BookSearchBar = ({ onClick }: Props) => {
  return (
    <Box>
      <div>
        <img src={Search} alt="SearchLogo" />
      </div>
      <input type="text" placeholder="Search by title or author" />
    </Box>
  );
};

export default BookSearchBar;
