import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const Section1 = ({ formData, onFieldChange }) => {
  return (
    <Box>
      <Typography variant="h6">Section 1 - Research & Publications</Typography>

      <TextField
        fullWidth
        label="Heading"
        value={formData.heading || ""}
        onChange={(e) => onFieldChange("section1", "heading", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Description"
        multiline
        rows={3}
        value={formData.description || ""}
        onChange={(e) =>
          onFieldChange("section1", "description", e.target.value)
        }
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Image URL"
        value={formData.imageSrc || ""}
        onChange={(e) => onFieldChange("section1", "imageSrc", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
    </Box>
  );
};

export default Section1;
