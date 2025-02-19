"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section2 = ({ formData, onFieldChange, slug }) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Heading"
            name="heading"
            value={formData.heading}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        {formData.list.map((item, index) => (
          <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h6">Item {index + 1}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name={`list[${index}].title`}
                value={item.title}
                onChange={(e) =>
                  onFieldChange(
                    `section2.list[${index}]`,
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
                label="Description"
                name={`list[${index}].description`}
                value={item.description}
                onChange={(e) =>
                  onFieldChange(
                    `section2.list[${index}]`,
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
                label="Image URL"
                name={`list[${index}].image`}
                value={item.image}
                onChange={(e) =>
                  onFieldChange(
                    `section2.list[${index}]`,
                    "image",
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

export default Section2;
