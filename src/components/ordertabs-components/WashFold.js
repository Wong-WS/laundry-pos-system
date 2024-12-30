import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function WashFoldComponent({ setFormData }) {
  const [formInput, setFormInput] = useState({
    name: "",
    phone: "",
    quantity: "",
    kg: "",
    price: "",
    type: "", 
  });
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  const handleTypeSelection = (type) => {
    setFormInput({ ...formInput, type });
    setStep(2);
  };

  const handleSubmit = () => {
    setFormData(formInput);
  };

  return (
    <Stack spacing={2} direction={"column"}>
      {step === 1 && (
        <Stack spacing={2} direction={"row"}>
          <Button
            variant="contained"
            onClick={() => handleTypeSelection("Clothes")}
          >
            Clothes
          </Button>
          <Button
            variant="contained"
            onClick={() => handleTypeSelection("Bedsheets")}
          >
            Bedsheets
          </Button>
        </Stack>
      )}
      {step === 2 && (
        <>
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
        </>
      )}
    </Stack>
  );
}

export default WashFoldComponent;

