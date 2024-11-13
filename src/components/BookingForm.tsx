import React, { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    passengers: 1,
    luggage: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box
      sx={{
        position: "absolute", // Ensure it's positioned above the background
        top: "50%",
        right: "10px",
        transform: "translateY(-50%)", // Center the form vertically
        padding: "20px",
        backgroundColor: "white", // White background for the form
        borderRadius: 2,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: "350px", // Increase the form width
        zIndex: 10, // Ensure form is above the background
      }}
    >
      <h3>Transfer Details</h3>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="From"
            name="from"
            value={formData.from}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="To"
            name="to"
            value={formData.to}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Passengers"
            name="passengers"
            type="number"
            value={formData.passengers}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Luggage"
            name="luggage"
            type="number"
            value={formData.luggage}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Continue
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingForm;
