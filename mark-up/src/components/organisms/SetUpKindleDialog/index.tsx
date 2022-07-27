import { Button, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import ButtonComponent from "../../atoms/Button";

const SetUpKindleDialog = () => {
  const handleChange = () => {
    //Navigate to Grid successfull molecule
  };
  return (
    <Stack flexDirection="column">
      <Stack alignItems="flex-start">
        <IconButton />
      </Stack>
      <Typography></Typography>
      <Typography></Typography>
      <Typography></Typography>
      <Typography></Typography>
      <Typography></Typography>
      <input type="email"></input>
      <Stack alignItems="center">
        <Button onClick={handleChange}>Add Email</Button>
        <ButtonComponent>Need Help?</ButtonComponent>
      </Stack>
    </Stack>
  );
};

export default SetUpKindleDialog;
