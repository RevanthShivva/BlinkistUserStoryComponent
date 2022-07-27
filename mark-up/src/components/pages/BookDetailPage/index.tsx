import React, { useEffect, useState } from "react";
import Header from "../../organisms/Header";
import BookDetails from "../../organisms/BookDetails";
import { Grid } from "@mui/material";
import SetUpKindleDialog from "../../organisms/SetUpKindleDialog";
const BookDetailPage = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState();
  const [value, setValue] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (
    e: React.MouseEventHandler<SVGSVGElement>,
    newValue: number
  ) => {
    setValue(newValue);
  };

  useEffect(() => {
    //get tabs data using fetch api
  }, []);
  return (
    <div>
      {value === 0 && (
        <Grid>
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <BookDetails data={data} />
          </Grid>
        </Grid>
      )}
      {value === 1 && (
        <Grid>
          <Grid item>
            <Header />
          </Grid>
          <Grid item>
            <BookDetails data={data} />
            <SetUpKindleDialog />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default BookDetailPage;
