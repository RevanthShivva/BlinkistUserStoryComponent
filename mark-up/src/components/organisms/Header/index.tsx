import { Box, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import BlinkistImage from "../../atoms/BlinkistIcon";
import ButtonComponent from "../../atoms/Button";
import IconButtonComponent from "../../atoms/Icons";
import BookSearchBar from "../../molecules/BookSearchBar";
import Search from "./searchicon.svg";

interface Props {
  onHandleChange?: any;
}

const Header = ({ onHandleChange }: Props) => {
  const [search, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(!search);
  };

  const navigateToLibraryPage = () => {
    //  route to my library page
  };

  return (
    <Grid>
      <Box>
        <BlinkistImage />
      </Box>

      {search === true && <BookSearchBar onClick={handleSearch} />}

      {search === false && (
        <>
          <Box>
            <img src={Search} onClick={handleSearch} alt="img" />
          </Box>
          <Box>
            <ButtonComponent
              endIcon={<IconButtonComponent></IconButtonComponent>}
            >
              <Typography>Explore</Typography>
            </ButtonComponent>
          </Box>
          <Box>
            <ButtonComponent>
              <Typography onClick={navigateToLibraryPage}>
                My Library
              </Typography>
            </ButtonComponent>
          </Box>
          <Box>
            <ButtonComponent>
              <Typography>Highlights</Typography>
            </ButtonComponent>
          </Box>
          <Stack flexDirection="row" alignItems="flex-end">
            <ButtonComponent
              onClick={onHandleChange}
              endIcon={<IconButtonComponent></IconButtonComponent>}
            >
              <Typography>Explore</Typography>
            </ButtonComponent>
          </Stack>
        </>
      )}
    </Grid>
  );
};

export default Header;
