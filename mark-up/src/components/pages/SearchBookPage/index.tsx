import React, { useEffect, useState } from "react";
import Header from "../../organisms/Header";
import { Grid } from "@mui/material";
import BookSearchOrganism from "../../organisms/BookSearchOrganism";
import DropDown from "../../molecules/DropDown";

const SearchBookPage = () => {
  const [value, setValue] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState();

  useEffect(() => {
    //get search books molecule using fetch api
  }, []);

  const handleChange = (
    //Handle search functinality
    e: React.MouseEventHandler<SVGSVGElement>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  return (
    <div>
      {value === 0 && (
        <Grid>
          <Grid item>
            <Header onHandleChange={handleChange}></Header>
          </Grid>
          <Grid item>
            <BookSearchOrganism />
          </Grid>
        </Grid>
      )}
      {value === 1 && (
        <Grid>
          <Grid item>
            <Header onHandleChange={handleChange}></Header>
            <DropDown data={data} />
          </Grid>
          <Grid item>
            <BookSearchOrganism />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default SearchBookPage;
