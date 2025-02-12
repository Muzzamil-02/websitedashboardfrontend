import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const Section1 = ({ formData, onFieldChange }) => {
  return (
    <Box>
      <Typography variant="h6">Insight Detail</Typography>

      <TextField
        fullWidth
        label="Main Heading"
        value={formData.mainHeading || ""}
        onChange={(e) => onFieldChange("mainHeading", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Date"
        value={formData.date || ""}
        onChange={(e) => onFieldChange("date", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Image URL"
        value={formData.imageURL || ""}
        onChange={(e) => onFieldChange("imageURL", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Description"
        multiline
        rows={6}
        value={formData.description || ""}
        onChange={(e) => onFieldChange("description", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
    </Box>
  );
};

export default Section1;
