"use client";

import { useState } from "react";
import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  CircularProgress,
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { uploadToS3 } from "@/lib/uploadToS3 ";

const Section1 = ({ formData, onFieldChange }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    uploadToS3(
      file,
      (url) => {
        console.log("Uploaded URL:", url);
        onFieldChange("imageUrl", url);
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
  return (
    <Grid container>
      <Typography variant="h5" gutterBottom>
        Our Trusted Partnerships Section
      </Typography>
      <Grid item xs={12}>
        <TextField
          sx={{ padding: "10px" }}
          fullWidth
          label="Heading"
          name="heading"
          value={formData.heading}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ padding: "10px" }}
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
          multiline
          rows={4}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          sx={{ padding: "10px" }}
          fullWidth
          label="Button Text"
          name="buttonText"
          value={formData.buttonText}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Image URL"
          name="imageUrl"
          value={formData.imageUrl}
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
                  id="imageUrlx"
                />
                <label htmlFor="imageUrlx">
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
  );
};

export default Section1;
