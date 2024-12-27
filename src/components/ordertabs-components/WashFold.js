import React from "react"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function WashFoldComponent() {
  return (
    <Stack spacing={2} direction={"row"}>
      <Button variant="contained">Clothes</Button>
      <Button variant="contained">Bedsheets</Button>
    </Stack>
  );
}

export default WashFoldComponent;