import React from "react";
import { Box, Typography, TextField } from "@mui/material";

const Section3 = ({ slug, formData, onFieldChange, onBlur }) => {
  return (
    <Box sx={{ padding: 2, border: "1px solid #ddd", borderRadius: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        {slug}
      </Typography>
      {formData?.tabs?.map((tab, index) => (
        <TextField
          key={index}
          label={`Tab ${index + 1}`}
          value={tab}
          onChange={(e) => onFieldChange(`tabs.${index}`, e.target.value)}
          onBlur={onBlur}
          fullWidth
          margin="normal"
        />
      ))}
    </Box>
  );
};

export default Section3;
