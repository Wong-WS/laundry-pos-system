import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, TextField, Select, MenuItem, Button } from "@mui/material";

const items = [
    { id: 1, name: "Bedsheets" },
    { id: 2, name: "Clothing" },
    { id: 3, name: "Suits" },
];

const services = [
    { id: "washing", name: "Washing (kg)", price: 5, unit: "kg" },
    { id: "wash_iron", name: "Washing + Ironing (per piece)", price: 4, unit: "piece" },
    { id: "iron", name: "Iron Only (per piece)", price: 3, unit: "piece" },
];

const ItemSelection = ({ onAddItem }) => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedService, setSelectedService] = useState("");
    const [quantity, setQuantity] = useState("");
    const [errors, setErrors] = useState({ service: false, quantity: false });

    const validateInputs = () => {
        const hasService = Boolean(selectedService);
        const isValidQuantity = quantity > 0;

        setErrors({
            service: !hasService,
            quantity: !isValidQuantity,
        });

        return hasService && isValidQuantity;
    };

    const handleAdd = () => {
        if (!validateInputs()) return;

        const service = services.find((s) => s.id === selectedService);

        onAddItem({
            ...selectedItem,
            service: service.name,
            price: service.price,
            quantity: parseFloat(quantity),
            total: parseFloat(quantity) * service.price,
            unit: service.unit,
        });

        setSelectedItem(null);
        setSelectedService("");
        setQuantity("");
        setErrors({ service: false, quantity: false });
    };

    return (
        <div>
            <Grid container spacing={2}>
                {items.map((item) => (
                    <Grid item xs={4} key={item.id}>
                        <Card onClick={() => setSelectedItem(item)}>
                            <CardContent>
                                <Typography variant="h6">{item.name}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {selectedItem && (
                <div style={{ marginTop: "20px" }}>
                    <Typography variant="h6">Selected: {selectedItem.name}</Typography>

                    <Select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        style={{ width: "100%", marginBottom: "10px" }}
                        displayEmpty
                        error={errors.service}
                    >
                        <MenuItem value="" disabled>Select Service</MenuItem>
                        {services.map((service) => (
                            <MenuItem key={service.id} value={service.id}>
                                {service.name} - RM{service.price} per {service.unit}
                            </MenuItem>
                        ))}
                    </Select>
                    {errors.service && (
                        <Typography color="error">Please select a service.</Typography>
                    )}

                    <TextField
                        label={`Enter ${selectedService === "washing" ? "Weight (kg)" : "Quantity (pieces)"}`}
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        style={{ marginBottom: "10px", width: "100%" }}
                        error={errors.quantity}
                        helperText={errors.quantity ? "Please enter a valid quantity." : ""}
                    />

                    <Button variant="contained" color="primary" onClick={handleAdd}>
                        Add to Order
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ItemSelection;

