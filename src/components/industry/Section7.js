"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section7 = ({ formData, onFieldChange, slug }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Enhanced Access to Capital
      </Typography>
      {formData.component?.map((component, index) => (
        <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="title"
              name={`component[${index}].title`}
              value={component.title}
              onChange={(e) =>
                onFieldChange(`component[${index}]`, "title", e.target.value)
              }
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Description"
              name={`component[${index}].description`}
              value={component.description}
              onChange={(e) =>
                onFieldChange(
                  `component[${index}]`,
                  "description",
                  e.target.value
                )
              }
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Logo URL"
              name={`component[${index}].logoURL`}
              value={component.logoURL}
              onChange={(e) =>
                onFieldChange(`component[${index}]`, "logoURL", e.target.value)
              }
              variant="outlined"
            />
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default Section7;
