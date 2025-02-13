"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section4 = ({ formData, onFieldChange }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Section 4
      </Typography>
      {formData.component.map((item, index) => (
        <Grid container spacing={2} key={index}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Value"
              name={`component[${index}].value`}
              value={item.value}
              onChange={(e) => onFieldChange(e.target.name, e.target.value)}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Label"
              name={`component[${index}].label`}
              value={item.label}
              onChange={(e) => onFieldChange(e.target.name, e.target.value)}
              variant="outlined"
            />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Section4;
