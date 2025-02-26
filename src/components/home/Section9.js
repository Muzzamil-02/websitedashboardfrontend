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

const Section9 = ({ formData, onFieldChange }) => {
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
        Sponser Company Logo Sections
      </Typography>

      <Grid container spacing={2}>
        {formData.urls && formData.urls.length > 0 ? (
          formData.urls.map((url, index) => (
            <Grid item xs={6} md={4} lg={3} key={index}>
              <Paper
                sx={{
                  padding: 2,
                  borderRadius: 2,
                  boxShadow: 3,
                  textAlign: "center",
                }}
              >
                <TextField
                  fullWidth
                  label="Image URL"
                  name={`urls.${index}`}
                  value={formData.urls[index]}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, `urls.${index}`)}
                          style={{ display: "none" }}
                          id={`urls.${index}`}
                        />

                        <label htmlFor={`urls.${index}`}>
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
          ))
        ) : (
          <Typography>No URLs available.</Typography>
        )}
      </Grid>
    </Box>
  );
};

export default Section9;
