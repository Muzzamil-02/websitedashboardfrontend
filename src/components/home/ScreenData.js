"use client";

import { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  CircularProgress,
  Box,
  Paper,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadToS3 } from "@/lib/uploadToS3 ";

const ScreenData = ({ formData, onFieldChange }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    uploadToS3(
      file,
      (url) => {
        console.log("Uploaded URL:", url);
        onFieldChange("image", url);
        setUploading(false);
        toast.success("Image uploaded successfully!", {
          position: "top-right",
        });
      },
      (error) => {
        console.error("Upload failed:", error);
        setUploading(false);
        toast.error("Image upload failed!", { position: "top-right" });
      }
    );
  };

  console.log("screendata", formData);
  return (
    <Box sx={{ marginTop: 4 }}>
      <Typography variant="h5" gutterBottom>
        Screen Data Section
      </Typography>

      {/* Image URL Field */}
      <TextField
        fullWidth
        label="Image URL"
        name="image"
        value={formData.image}
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
                id="scressndata"
              />
              <label htmlFor="scressndata">
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
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />

              {/* Step Title */}
              <TextField
                fullWidth
                label="Title"
                name={`steps.${index}.title`}
                value={step.title}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
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
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
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
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            label="Button Link"
            name="button.link"
            value={formData.button.link}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
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
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Footer Link"
            name="footer.link"
            value={formData.footer.link}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            fullWidth
            label="Footer Link Text"
            name="footer.linkText"
            value={formData.footer.linkText}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScreenData;
