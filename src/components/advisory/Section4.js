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

const Section4 = ({ formData, onFieldChange, slug }) => {
  if (!formData || Object.keys(formData).length === 0) {
    return <Typography variant="h6">No Data Available</Typography>;
  }
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

  console.log("formData", formData);

  return (
    <>
      <Typography variant="h5" gutterBottom sx={{ paddingBottom: "10px" }}>
        Advisory Services We Offer Section
      </Typography>
      <Grid container spacing={2}>
        {Object.entries(formData).map(([key, service], index) => {
          if (key === "heading") return null;
          return (
            <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Titlle"
                  name={`${key}.title`}
                  value={service.title || ""}
                  onChange={(e) =>
                    onFieldChange(`${key}.title`, e.target.value)
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Description"
                  name={`${key}.description`}
                  value={service.description || ""}
                  onChange={(e) =>
                    onFieldChange(`${key}.description`, e.target.value)
                  }
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Image URL"
                  name={`${key}.icon`}
                  value={service.icon || ""}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, `${key}.icon`)}
                          style={{ display: "none" }}
                          id={`${key}.icon`}
                        />

                        <label htmlFor={`${key}.icon`}>
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
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  label="Image URL"
                  name={`${key}.image`}
                  value={service.image || ""}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => handleFileChange(e, `${key}.image`)}
                          style={{ display: "none" }}
                          id={`${key}.image`}
                        />

                        <label htmlFor={`${key}.image`}>
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
              <Grid item xs={12}>
                {service.service &&
                  service.service.map((point, idx) => (
                    <TextField
                      key={idx}
                      fullWidth
                      label={`Service Detail ${idx + 1}`}
                      name={`${key}.service[${idx}]`}
                      value={point || ""}
                      onChange={(e) =>
                        handleFieldChange(
                          `${key}.service.${idx}`,
                          null,
                          e.target.value
                        )
                      }
                      variant="outlined"
                    />
                  ))}
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Section4;
