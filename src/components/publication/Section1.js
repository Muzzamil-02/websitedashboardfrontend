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
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Publications Top Section
      </Typography>

      <TextField
        fullWidth
        label="Heading"
        value={formData.Heading || ""}
        onChange={(e) => onFieldChange("Heading", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      <TextField
        fullWidth
        label="Text"
        multiline
        rows={3}
        value={formData.Text || ""}
        onChange={(e) => onFieldChange("Text", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

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
                id="image1publication"
              />
              <label htmlFor="image1publication">
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
    </Box>
  );
};

export default Section1;
