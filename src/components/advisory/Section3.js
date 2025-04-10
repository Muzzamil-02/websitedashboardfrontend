"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section3 = ({ formData, onFieldChange, slug }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Sprint Centric Delivery Model Section
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        {formData.steps.map((step, index) => (
          <Grid container spacing={2} key={index} sx={{ padding: "10px" }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={`Step ${index + 1} Title`}
                name={`steps[${index}].title`}
                value={step.title}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Section3;
