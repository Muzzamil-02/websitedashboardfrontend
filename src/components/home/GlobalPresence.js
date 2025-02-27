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

const GlobalPresence = ({ formData, onFieldChange }) => {
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
    <>
      <Typography variant="h5" gutterBottom>
        Global Presence
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            name="title"
            value={formData?.title}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Highlight"
            name="highlight"
            value={formData?.highlight}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Subtitle"
            name="subtitle"
            value={formData.subtitle}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
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
                    id="globalpresence"
                  />
                  <label htmlFor="globalpresence">
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
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={formData.description}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>
        {formData?.locations?.map((loc, index) => (
          <Grid
            container
            spacing={2}
            key={index}
            sx={{ paddingBottom: "10px", paddingTop: "10px" }}
          >
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Location Name"
                name={`location[${index}].name`}
                value={loc.name}
                onChange={(e) =>
                  onFieldChange(`location[${index}].name`, e.target.value)
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Location Address"
                name={`location[${index}].address`}
                value={loc.address}
                onChange={(e) =>
                  onFieldChange(`location[${index}].address`, e.target.value)
                }
                variant="outlined"
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GlobalPresence;
