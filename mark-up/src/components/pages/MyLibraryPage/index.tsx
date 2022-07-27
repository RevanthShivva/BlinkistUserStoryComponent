import React, { useEffect, useState } from "react";
import Header from "../../organisms/Header";
import { Grid } from "@mui/material";
import MyLibrary from "../../organisms/MyLibrary";
import ExploreMenu from "../../organisms/ExploreMenu";

const MyLibraryPage = () => {
  const [value, setValue] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState();

  useEffect(() => {
    //get books data using fetch api
  }, []);

  const handleChange = (
    e: React.MouseEventHandler<SVGSVGElement>,
    newValue: number
  ) => {
    setValue(newValue);
  };
  return (
    <Grid>
      {value === 0 && (
        <>
          <Header onHandleChange={handleChange} />
          <Grid item>
            <MyLibrary data={data} />
          </Grid>
        </>
      )}

      {value === 1 && (
        <>
          <Header onHandleChange={handleChange} />
          <ExploreMenu />
          <MyLibrary data={data} />
        </>
      )}
    </Grid>
  );
};

export default MyLibraryPage;
