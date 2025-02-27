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
} from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadToS3 } from "@/lib/uploadToS3 ";

const Section4 = ({ formData, onFieldChange }) => {
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
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Spectreco's growing
      </Typography>
      <TextField
        sx={{ paddingBottom: "10px", paddingTop: "10px" }}
        fullWidth
        label="Text"
        name="text"
        value={formData.text}
        onChange={(e) => onFieldChange(e.target.name, e.target.value)}
        variant="outlined"
        multiline
        rows={4}
      />
      <TextField
        sx={{ paddingBottom: "10px", paddingTop: "10px" }}
        fullWidth
        label="Button Text"
        name="buttonText"
        value={formData.buttonText}
        onChange={(e) => onFieldChange(e.target.name, e.target.value)}
        variant="outlined"
      />
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
                id="imageUrlrr"
              />
              <label htmlFor="imageUrlrr">
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
      {/* <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" sx={{ background: "#d30c0b" }}>
          Save
        </Button>
      </Box> */}
    </Box>
  );
};

export default Section4;
