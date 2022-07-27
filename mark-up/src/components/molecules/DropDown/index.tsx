import { Grid } from "@mui/material";

type searchBookItem = {
  bookName: string;
  authorName: string;
};
interface Props {
  data?: searchBookItem[];
}
const DropDown = ({ data }: Props) => {
  return (
    <Grid>
      {data?.map((eachbook: searchBookItem, index: number) => {
        return <Grid item></Grid>;
      })}
    </Grid>
  );
};

export default DropDown;
