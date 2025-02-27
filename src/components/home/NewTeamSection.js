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
const NewTeamSection = ({ formData, onFieldChange, slug }) => {
  if (!formData || Object.keys(formData).length === 0) return null;
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

  console.log("team section");

  return (
    <>
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Main Heading"
            name="mainHeading"
            value={formData.mainHeading}
            onChange={(e) => onFieldChange("mainHeading", e.target.value)}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Sub Heading"
            name="subHeading"
            value={formData.subHeading}
            onChange={(e) => onFieldChange("subHeading", e.target.value)}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description 1"
            name="description1"
            value={formData.description1}
            onChange={(e) => onFieldChange("description1", e.target.value)}
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description 2"
            name="description2"
            value={formData.description2}
            onChange={(e) => onFieldChange("description2", e.target.value)}
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={(e) => onFieldChange("email", e.target.value)}
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
                    id="nana"
                  />
                  <label htmlFor="nana">
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
    </>
  );
};

export default NewTeamSection;
