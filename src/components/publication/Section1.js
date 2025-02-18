import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const Section1 = ({ formData, onFieldChange }) => {
  return (
    <Box>
      <Typography variant="h6">Section 1 - Research & Publications</Typography>

      <TextField
        fullWidth
        label="Heading"
        value={formData.Heading || ""}
        onChange={(e) => onFieldChange("Heading", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Text"
        multiline
        rows={3}
        value={formData.Text || ""}
        onChange={(e) => onFieldChange("Text", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Image URL"
        value={formData.image || ""}
        onChange={(e) => onFieldChange("image", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
    </Box>
  );
};

export default Section1;
