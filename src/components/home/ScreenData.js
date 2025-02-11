"use client";

import { Grid, TextField, Typography, Box, Paper } from "@mui/material";

const ScreenData = ({ formData, onFieldChange }) => {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Screen Data - ESG Transition Steps
      </Typography>

      {/* Image URL Field */}
      <TextField
        fullWidth
        label="Image URL"
        name="image"
        value={formData.image}
        onChange={(e) =>
          onFieldChange("screendata", e.target.name, e.target.value)
        }
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Steps Section */}
      <Typography variant="h6">Steps</Typography>

      <Grid container spacing={2}>
        {formData.steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
              {/* Step Number */}
              <TextField
                fullWidth
                label="Step Number"
                name={`steps.${index}.number`}
                value={step.number}
                onChange={(e) => {
                  const updatedSteps = [...formData.steps];
                  updatedSteps[index].number = e.target.value;
                  onFieldChange("screendata", "steps", updatedSteps);
                }}
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />

              {/* Step Title */}
              <TextField
                fullWidth
                label="Title"
                name={`steps.${index}.title`}
                value={step.title}
                onChange={(e) => {
                  const updatedSteps = [...formData.steps];
                  updatedSteps[index].title = e.target.value;
                  onFieldChange("screendata", "steps", updatedSteps);
                }}
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />

              {/* Step Description */}
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Description"
                name={`steps.${index}.description`}
                value={step.description}
                onChange={(e) => {
                  const updatedSteps = [...formData.steps];
                  updatedSteps[index].description = e.target.value;
                  onFieldChange("screendata", "steps", updatedSteps);
                }}
                variant="outlined"
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Button Section */}
      <Typography variant="h6" sx={{ marginTop: 3 }}>
        Button
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Button Text"
            name="button.text"
            value={formData.button.text}
            onChange={(e) =>
              onFieldChange("screendata", "button.text", e.target.value)
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Button Link"
            name="button.link"
            value={formData.button.link}
            onChange={(e) =>
              onFieldChange("screendata", "button.link", e.target.value)
            }
            variant="outlined"
          />
        </Grid>
      </Grid>

      {/* Footer Section */}
      <Typography variant="h6" sx={{ marginTop: 3 }}>
        Footer
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Footer Text"
            name="footer.text"
            value={formData.footer.text}
            onChange={(e) =>
              onFieldChange("screendata", "footer.text", e.target.value)
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Footer Link"
            name="footer.link"
            value={formData.footer.link}
            onChange={(e) =>
              onFieldChange("screendata", "footer.link", e.target.value)
            }
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Footer Link Text"
            name="footer.linkText"
            value={formData.footer.linkText}
            onChange={(e) =>
              onFieldChange("screendata", "footer.linkText", e.target.value)
            }
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScreenData;
