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
        {formData.services.map((service, index) => (
          <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h6">Service {index + 1}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name={`services[${index}].title`}
                value={service.title}
                onChange={(e) =>
                  onFieldChange(
                    `section4.services[${index}]`,
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
                name={`services[${index}].description`}
                value={service.description}
                onChange={(e) =>
                  onFieldChange(
                    `section4.services[${index}]`,
                    "description",
                    e.target.value
                  )
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Icon URL"
                name={`services[${index}].icon`}
                value={service.icon}
                onChange={(e) =>
                  onFieldChange(
                    `section4.services[${index}]`,
                    "icon",
                    e.target.value
                  )
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Image URL"
                name={`services[${index}].image`}
                value={service.image}
                onChange={(e) =>
                  onFieldChange(
                    `section4.services[${index}]`,
                    "image",
                    e.target.value
                  )
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              {service.service.map((point, idx) => (
                <TextField
                  key={idx}
                  fullWidth
                  label={`Service Detail ${idx + 1}`}
                  name={`services[${index}].service[${idx}]`}
                  value={point}
                  onChange={(e) =>
                    onFieldChange(
                      `section4.services[${index}].service`,
                      idx,
                      e.target.value
                    )
                  }
                  variant="outlined"
                />
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Section4;
