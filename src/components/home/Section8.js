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
import Image from "next/image";

const Section8 = ({ formData, onFieldChange }) => {
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
      <Typography variant="h5" gutterBottom>
        Data Insights and Capacity Building Section
      </Typography>

      <Grid container spacing={4}>
        {Object.keys(formData).map((key) => (
          <Grid item xs={12} md={6} key={key}>
            <Paper sx={{ padding: 3, borderRadius: 2, boxShadow: 3 }}>
              {/* Main Heading */}
              <Typography variant="h6">{formData[key].mainHeading}</Typography>

              <TextField
                fullWidth
                label="Main Heading"
                name={`${key}.mainHeading`}
                value={formData[key].mainHeading}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginTop: 1 }}
              />

              {/* Subheading */}
              <TextField
                fullWidth
                label="Heading"
                name={`${key}.Heading`}
                value={formData[key].Heading}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginTop: 1 }}
              />

              {/* Description */}
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Text"
                name={`${key}.Text`}
                value={formData[key].Text}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginTop: 1 }}
              />

              {/* Image URL Field Only (No Preview) */}
              <TextField
                fullWidth
                label="Image URL"
                name={`${key}.imageSrc`}
                value={formData[key].imageSrc}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, `${key}.imageSrc`)}
                        style={{ display: "none" }}
                        id={`${key}.imageSrc`}
                      />

                      <label htmlFor={`${key}.imageSrc`}>
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

              {/* Button Text */}
              <TextField
                fullWidth
                label="Button Text"
                name={`${key}.buttonText`}
                value={formData[key].buttonText}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                sx={{ marginTop: 1 }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section8;
