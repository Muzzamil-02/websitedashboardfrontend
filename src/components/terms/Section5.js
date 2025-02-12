import React from "react";
import { TextField, Grid, Typography } from "@mui/material";

const Section5 = ({ formData, onFieldChange }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">section5</Typography>
      </Grid>
      <TextField
        fullWidth
        label="Heading"
        name="heading"
        value={formData.heading}
        onChange={(e) => onFieldChange("section5", "heading", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />
      {formData.description1 && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description 1"
            name="description1"
            value={formData.description1}
            onChange={(e) =>
              onFieldChange("section5", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
      )}
      {formData.description2 && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description 2"
            name="description2"
            value={formData.description2}
            onChange={(e) =>
              onFieldChange("section5", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
      )}
      {formData.description3 && (
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description 3"
            name="description3"
            value={formData.description2}
            onChange={(e) =>
              onFieldChange("section5", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
      )}
    </Grid>
  );
};

export default Section5;
