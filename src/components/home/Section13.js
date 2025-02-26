"use client";

import { Grid, TextField, Typography, Box, Paper } from "@mui/material";

const Section13 = ({ formData, onFieldChange, slug }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Section13
      </Typography>

      <Grid container spacing={2}>
        {/* Title Field */}
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData.title}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
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
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
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
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
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
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>

        {/* Image URL Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Image URL"
            name="image"
            value={formData?.image || ""}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                    id="advisory"
                  />
                  <label htmlFor="advisory">
                    <IconButton component="span" disabled={uploading}>
                      {uploading ? (
                        <CircularProgress size={24} sx={{ color: "#d30c0b" }} />
                      ) : (
                        <CameraAltIcon
                          sx={{ color: "#d30c0b", fontSize: "30px" }}
                        />
                      )}
                    </IconButton>
                  </label>
                </InputAdornment>
              ),
            }}
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
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
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
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
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
