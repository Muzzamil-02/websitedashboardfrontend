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

const Section5 = ({ formData, onFieldChange }) => {
  const [uploading, setUploading] = useState([]);
  const [uploading2, setUploading2] = useState([]);

  const updateUploading = (boolValue, index) => {
    const newUploading = [...uploading];
    newUploading[index] = boolValue;
    setUploading(newUploading);
  };

  const updateUploading2 = (boolValue, index) => {
    const newUploading = [...uploading2];
    newUploading[index] = boolValue;
    setUploading2(newUploading);
  };

  const handleFileChange = (e, fieldName, index) => {
    const file = e.target.files[0];
    if (!file) return;

    updateUploading(true, index);

    uploadToS3(
      file,
      (url) => {
        console.log("Uploaded URL:", url);
        onFieldChange(fieldName, url);
        updateUploading(false, index);
        toast.success("Image uploaded successfully!", {
          position: "top-right",
        });
      },
      (error) => {
        console.error("Upload failed:", error);
        updateUploading(false, index);
        toast.error("Image upload failed!", { position: "top-right" });
      }
    );
  };

  const handleFileChange2 = (e, fieldName, index) => {
    const file = e.target.files[0];
    if (!file) return;

    updateUploading2(true, index);

    uploadToS3(
      file,
      (url) => {
        console.log("Uploaded URL:", url);
        onFieldChange(fieldName, url);
        updateUploading2(false, index);
        toast.success("Image uploaded successfully!", {
          position: "top-right",
        });
      },
      (error) => {
        console.error("Upload failed:", error);
        updateUploading2(false, index);
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
          (key, index) =>
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
                            handleFileChange(e, `right.${key}.imgURL`, index)
                          }
                          style={{ display: "none" }}
                          id={`right.${key}.imgURL`}
                        />

                        <label htmlFor={`right.${key}.imgURL`}>
                          <IconButton
                            component="span"
                            disabled={uploading[index] ?? false}
                          >
                            {index < uploading.length && uploading[index] ? (
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
          (key, index) =>
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
                            handleFileChange2(e, `left.${key}.imgURL`, index)
                          }
                          style={{ display: "none" }}
                          id={`left.${key}.imgURL`}
                        />

                        <label htmlFor={`left.${key}.imgURL`}>
                          <IconButton
                            component="span"
                            disabled={uploading[index] ?? false}
                          >
                            {index < uploading2.length && uploading2[index] ? (
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
