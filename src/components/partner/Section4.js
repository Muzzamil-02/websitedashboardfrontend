"use client";

import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const Section4 = ({ formData, onFieldChange, slug }) => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>
      <TextField
        fullWidth
        label="Text"
        name="text"
        value={formData.text}
        onChange={(e) => onFieldChange(e.target.name, e.target.value)}
        variant="outlined"
        multiline
        rows={4}
      />
      <TextField
        fullWidth
        label="Button Text"
        name="buttonText"
        value={formData.buttonText}
        onChange={(e) => onFieldChange(e.target.name, e.target.value)}
        variant="outlined"
      />
      <TextField
        fullWidth
        label="Image URL"
        name="imageUrl"
        value={formData.imageUrl}
        onChange={(e) => onFieldChange(e.target.name, e.target.value)}
        variant="outlined"
      />
      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Box>
    </Box>
  );
};

export default Section4;
