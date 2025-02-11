import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const Section1 = ({ formData, onFieldChange }) => {
  return (
    <div>
      {/* Heading */}
      <Typography>hdh</Typography>
      <TextField
        fullWidth
        label="Heading"
        value={formData.heading}
        onChange={(e) => onFieldChange("section1", "heading", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Subheading */}
      <TextField
        fullWidth
        label="Subheading"
        value={formData.subheading}
        onChange={(e) =>
          onFieldChange("section1", "subheading", e.target.value)
        }
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Button Text */}
      <TextField
        fullWidth
        label="Button Text"
        value={formData.button}
        onChange={(e) => onFieldChange("section1", "button", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
    </div>
  );
};

export default Section1;
