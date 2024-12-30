import React, { useState } from "react"
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import LaundryForm from "../FormComponents";

function WashIronComponent({ setFormData }) {
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

  const types = ["Clothes", "Bedsheets", "Suit", "T-Shirt"];

  return (
    <Stack spacing={2} direction={"column"}>
      {step === 1 && (
        <Stack spacing={2} direction={"row"}>
          {types.map((type) => (
            <Button
              key={type}
              variant="contained"
              onClick={() => handleTypeSelection(type)}
            >
              {type}
            </Button>
          ))}
        </Stack>
      )}
      {step === 2 && (
        <LaundryForm
          formInput={formInput}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}
    </Stack>
  );
}

export default WashIronComponent;