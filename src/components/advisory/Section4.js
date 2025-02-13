"use client";

import { Grid, TextField, Typography } from "@mui/material";

const Section4 = ({ formData, onFieldChange }) => {
  if (!formData || Object.keys(formData).length === 0) {
    return <Typography variant="h6">No Data Available</Typography>;
  }

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Section4
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(formData).map(([key, service], index) => {
          if (key === "heading") return null;
          return (
            <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
              <Grid item xs={12}>
                <Typography variant="h6">{service.title}</Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name={`${key}.description`}
                  value={service.description || ""}
                  onChange={(e) =>
                    onFieldChange(
                      `section4.${key}`,
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
                  name={`${key}.icon`}
                  value={service.icon || ""}
                  onChange={(e) =>
                    onFieldChange(`section4.${key}`, "icon", e.target.value)
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Image URL"
                  name={`${key}.image`}
                  value={service.image || ""}
                  onChange={(e) =>
                    onFieldChange(`section4.${key}`, "image", e.target.value)
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                {service.service &&
                  service.service.map((point, idx) => (
                    <TextField
                      key={idx}
                      fullWidth
                      label={`Service Detail ${idx + 1}`}
                      name={`${key}.service[${idx}]`}
                      value={point || ""}
                      onChange={(e) =>
                        onFieldChange(
                          `section4.${key}.service`,
                          idx,
                          e.target.value
                        )
                      }
                      variant="outlined"
                    />
                  ))}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Section4;
