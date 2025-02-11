"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section4 = ({ formData, onFieldChange }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Section 4
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Heading"
            name="heading"
            value={formData.heading}
            onChange={(e) =>
              onFieldChange("section4", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
        {formData.components?.map((component, index) => (
          <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h6">Component {index + 1}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name={`components[${index}].title`}
                value={component.title}
                onChange={(e) =>
                  onFieldChange(
                    `section4.components[${index}]`,
                    "title",
                    e.target.value
                  )
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name={`components[${index}].imageUrl`}
                value={component.imageUrl}
                onChange={(e) =>
                  onFieldChange(
                    `section4.components[${index}]`,
                    "imageUrl",
                    e.target.value
                  )
                }
                variant="outlined"
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Section4;
