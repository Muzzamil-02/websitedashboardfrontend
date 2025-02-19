"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section5 = ({ formData, onFieldChange, slug }) => {
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
        {formData.component?.map((item, index) => (
          <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h6">Item {index + 1}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name={`component[${index}].title`}
                value={item.title}
                onChange={(e) =>
                  onFieldChange(`component[${index}]`, "title", e.target.value)
                }
                variant="outlined"
              />
            </Grid>
            {item.content?.map((content, subIndex) => (
              <Grid container spacing={2} key={subIndex}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subtitle"
                    name={`component[${index}].content[${subIndex}].subtitle`}
                    value={content.subtitle}
                    onChange={(e) =>
                      onFieldChange(
                        `component[${index}].content[${subIndex}]`,
                        "subtitle",
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
                    name={`component[${index}].content[${subIndex}].description`}
                    value={content.description}
                    onChange={(e) =>
                      onFieldChange(
                        `component[${index}].content[${subIndex}]`,
                        "description",
                        e.target.value
                      )
                    }
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name={`component[${index}].imageURL`}
                value={item.imageURL}
                onChange={(e) =>
                  onFieldChange(
                    `component[${index}]`,
                    "imageURL",
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

export default Section5;
