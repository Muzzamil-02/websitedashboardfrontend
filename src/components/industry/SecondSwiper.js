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
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { uploadToS3 } from "@/lib/uploadToS3 ";

const SecondSwiper = ({ formData, onFieldChange }) => {
  const [uploading, setUploading] = useState([]);

  const updateUploading = (boolValue, index) => {
    const newUploading = [...uploading];
    newUploading[index] = boolValue;
    setUploading(newUploading);
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
  console.log("swiper");
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Second Swiper
      </Typography>

      {/* Main Heading */}
      <TextField
        fullWidth
        label="Main Heading"
        name="mainHeading"
        value={formData.mainHeading}
        onChange={(e) => onFieldChange("mainHeading", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Heading */}
      <TextField
        fullWidth
        label="Heading"
        name="heading"
        value={formData.heading}
        onChange={(e) => onFieldChange("heading", e.target.value)}
        variant="outlined"
        sx={{ marginBottom: 2 }}
      />

      {/* Description */}
      <TextField
        fullWidth
        label="Description"
        name="description"
        value={formData.description}
        onChange={(e) => onFieldChange("description", e.target.value)}
        variant="outlined"
        multiline
        rows={4}
        sx={{ marginBottom: 2 }}
      />

      {formData.components.map((component, index) => (
        <div key={index}>
          <Typography variant="h6" gutterBottom>
            {`Element ${index + 1}`}
          </Typography>
          <Grid container spacing={2} key={index} sx={{ padding: "10px" }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={`Title ${index + 1}`}
                name={`components[${index}].title`}
                value={component.title}
                onChange={(e) =>
                  onFieldChange(`components[${index}]`, "title", e.target.value)
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label={`Description ${index + 1}`}
                name={`components[${index}].description`}
                value={component.description}
                onChange={(e) =>
                  onFieldChange(
                    `components[${index}]`,
                    "description",
                    e.target.value
                  )
                }
                variant="outlined"
              />
            </Grid>

            <Grid item xs={5}>
              <TextField
                fullWidth
                label={`Image URL ${index + 1}`}
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
                          handleFileChange(
                            e,
                            `components[${index}].imageUrl`,
                            index
                          )
                        }
                        style={{ display: "none" }}
                        id={`uploadStakeHolders[${index}].imageUrl`}
                      />
                      <label htmlFor={`uploadStakeHolders[${index}].imageUrl`}>
                        <IconButton component="span" disabled={uploading}>
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
          </Grid>
        </div>
      ))}
    </>
  );
};

export default SecondSwiper;
