"use client";

import { Grid, TextField, Typography, Box, Paper } from "@mui/material";

const Section13 = ({ formData, onFieldChange }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Global Presence
      </Typography>

      <Grid container spacing={2}>
        {/* Title Field */}
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={(e) =>
              onFieldChange("section13", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>

        {/* Highlight Field */}
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Highlight"
            name="highlight"
            value={formData.highlight}
            onChange={(e) =>
              onFieldChange("section13", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>

        {/* Subtitle Field */}
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Subtitle"
            name="subtitle"
            value={formData.subtitle}
            onChange={(e) =>
              onFieldChange("section13", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>

        {/* Description Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={4}
            label="Description"
            name="description"
            value={formData.description}
            onChange={(e) =>
              onFieldChange("section13", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>

        {/* Image URL Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Image URL"
            name="image"
            value={formData.image}
            onChange={(e) =>
              onFieldChange("section13", e.target.name, e.target.value)
            }
            variant="outlined"
          />
        </Grid>
      </Grid>

      {/* Locations Section */}
      <Typography variant="h6" sx={{ marginTop: 3 }}>
        Locations
      </Typography>

      <Grid container spacing={2}>
        {formData.locations.map((location, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
              {/* Location Name */}
              <TextField
                fullWidth
                label="Location Name"
                name={`locations.${index}.name`}
                value={location.name}
                onChange={(e) => {
                  const updatedLocations = [...formData.locations];
                  updatedLocations[index].name = e.target.value;
                  onFieldChange("section13", "locations", updatedLocations);
                }}
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />

              {/* Location Address */}
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Location Address"
                name={`locations.${index}.address`}
                value={location.address}
                onChange={(e) => {
                  const updatedLocations = [...formData.locations];
                  updatedLocations[index].address = e.target.value;
                  onFieldChange("section13", "locations", updatedLocations);
                }}
                variant="outlined"
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section13;
