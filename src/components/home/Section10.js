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
import toast from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";
import { uploadToS3 } from "@/lib/uploadToS3 ";
import Image from "next/image";

const Section10 = ({ formData, onFieldChange }) => {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);

    uploadToS3(
      file,
      (url) => {
        console.log("Uploaded URL:", url);
        onFieldChange(fieldName, url); // Pass the dynamic field name
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
    <Box sx={{ marginTop: 4 }}>
      {/* Main Heading */}
      <Typography variant="h5" gutterBottom>
        Advisory Section
      </Typography>

      {/* Main Heading Input */}
      <TextField
        fullWidth
        label="Main Heading"
        name="mainHeading"
        value={formData.mainHeading}
        onChange={(e) => onFieldChange(e.target.name, e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Heading Input with HTML Parsing Preview */}
      <TextField
        fullWidth
        label="Heading (HTML)"
        name="heading"
        value={formData.heading}
        onChange={(e) => onFieldChange(e.target.name, e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 1 }}
      />

      {/* Subheading Input */}
      <TextField
        fullWidth
        multiline
        rows={3}
        label="Subheading"
        name="subHeading"
        value={formData.subHeading}
        onChange={(e) => onFieldChange(e.target.name, e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 3 }}
      />

      <Grid container spacing={2}>
        {formData.component.map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
              {/* Title Input */}
              <TextField
                fullWidth
                label="Title"
                name={`component.${index}.title`}
                value={item.title}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />

              {/* Description Input */}
              <TextField
                fullWidth
                multiline
                rows={2}
                label="Description"
                name={`component.${index}.description`}
                value={item.description}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginBottom: 1 }}
              />

              {/* Image URL Input */}
              <TextField
                fullWidth
                label="Image URL"
                name={`component.${index}.imageURL`}
                value={item.imageURL}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleFileChange(e, `component.${index}.imageURL`)
                        }
                        style={{ display: "none" }}
                        id={`component.${index}.imageURL`}
                      />

                      <label htmlFor={`component.${index}.imageURL`}>
                        <IconButton component="span" disabled={uploading}>
                          {uploading ? (
                            <CircularProgress
                              size={24}
                              sx={{ color: "#d30c0b" }}
                            />
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
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section10;
