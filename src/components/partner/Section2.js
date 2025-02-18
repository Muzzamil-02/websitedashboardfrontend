"use client";

import React from "react";
import { TextField, Typography } from "@mui/material";

const Section2 = ({ formData, onFieldChange }) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom>
        section2
      </Typography>
      <TextField
        fullWidth
        multiline
        rows={4}
        name="Text"
        value={formData.Text}
        onChange={(e) => onFieldChange(e.target.name, e.target.value)}
        variant="outlined"
      />
    </div>
  );
};

export default Section2;
