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

const Section5 = ({ formData, onFieldChange }) => {
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
        Built Environemnt Section
      </Typography>

      <Grid container spacing={2}>
        {/* Heading Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Heading"
            name="heading"
            value={formData.heading}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>

        {/* Right Section */}
        <Grid item xs={12}>
          <Typography variant="h6">Right Section</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Right Button Text"
            name="right.button"
            value={formData.right.button}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>

        {/* Dynamically Render Right Section Items */}
        {Object.keys(formData.right).map(
          (key) =>
            key !== "button" && (
              <Grid item xs={4} key={key}>
                <TextField
                  fullWidth
                  label="Image URL"
                  name={`right.${key}.imgURL`}
                  value={formData.right[key].imgURL || ""}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleFileChange(e, `right.${key}.imgURL`)
                          }
                          style={{ display: "none" }}
                          id={`right.${key}.imgURL`}
                        />

                        <label htmlFor={`right.${key}.imgURL`}>
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
              </Grid>
            )
        )}

        {/* Left Section */}
        <Grid item xs={12}>
          <Typography variant="h6">Left Section</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Left Button Text"
            name="left.button"
            value={formData.left.button}
            onChange={(e) => onFieldChange(e.target.name, e.target.value)}
            variant="outlined"
          />
        </Grid>

        {/* Dynamically Render Left Section Items */}
        {Object.keys(formData.left).map(
          (key) =>
            key !== "button" && (
              <Grid item xs={4} key={key}>
                <TextField
                  fullWidth
                  label="Image URL"
                  name={`left.${key}.imgURL`}
                  value={formData.left[key].imgURL || ""}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleFileChange(e, `left.${key}.imgURL`)
                          }
                          style={{ display: "none" }}
                          id={`left.${key}.imgURL`}
                        />

                        <label htmlFor={`left.${key}.imgURL`}>
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
              </Grid>
            )
        )}
      </Grid>
    </Box>
  );
};

export default Section5;
