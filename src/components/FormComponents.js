import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function LaundryForm({ formInput, handleChange, handleSubmit }) {
  return (
    <Stack spacing={2} direction={"column"}>
      <TextField
        name="name"
        label="Name"
        value={formInput.name}
        onChange={handleChange}
      />
      <TextField
        name="phone"
        label="Phone"
        value={formInput.phone}
        onChange={handleChange}
      />
      <TextField
        name="quantity"
        label="Quantity"
        value={formInput.quantity}
        onChange={handleChange}
      />
      <TextField
        name="kg"
        label="KG"
        value={formInput.kg}
        onChange={handleChange}
      />
      <TextField
        name="price"
        label="Price"
        value={formInput.price}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
    </Stack>
  );
}

export default LaundryForm;
