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

const Section3 = ({ formData, onFieldChange }) => {
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
    <Grid container>
      <Typography variant="h5" gutterBottom>
        Our Partners Sections
      </Typography>
      <Grid item xs={12}>
        <TextField
          sx={{ padding: "10px" }}
          fullWidth
          label="Heading"
          name="heading"
          value={formData.heading}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
        />
      </Grid>
      {formData.components.map((component, index) => (
        <Grid
          key={index}
          item
          xs={12}
          sx={{ padding: "10px", marginBottom: "10px" }}
        >
          <Grid sx={{ padding: "10px" }}>
            <TextField
              fullWidth
              label="Title"
              name={`components[${index}].title`}
              value={component.title}
              onChange={(e) =>
                onFieldChange(`components[${index}].title`, e.target.value)
              }
              variant="outlined"
              multiline
            />
          </Grid>
          <Grid sx={{ padding: "10px" }}>
            <TextField
              fullWidth
              label="Text"
              name={`components[${index}].text`}
              value={component.text}
              onChange={(e) =>
                onFieldChange(`components[${index}].text`, e.target.value)
              }
              variant="outlined"
            />
          </Grid>
          <Grid sx={{ padding: "10px" }}>
            <TextField
              fullWidth
              label="Image URL"
              name={`components[${index}].imageUrl`}
              value={component.imageUrl}
              onChange={(e) => onFieldChange(e.target.name, e.target.value)}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileChange(e, `components[${index}].imageUrl`)
                      }
                      style={{ display: "none" }}
                      id={`components[${index}].imageUrl`}
                    />

                    <label htmlFor={`components[${index}].imageUrl`}>
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
        </Grid>
      ))}
    </Grid>
  );
};

export default Section3;
