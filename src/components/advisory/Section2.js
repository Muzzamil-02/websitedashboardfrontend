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

const Section2 = ({ formData, onFieldChange }) => {
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
    <>
      <Typography variant="h5" gutterBottom>
        Guiding Sustainable Strategies Section
      </Typography>
      <Grid container spacing={2}>
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
        {formData.list.map((item, index) => (
          <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h6">Item {index + 1}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name={`list[${index}].title`}
                value={item.title}
                onChange={(e) =>
                  onFieldChange(`list[${index}].title`, e.target.value)
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name={`list[${index}].description`}
                value={item.description}
                onChange={(e) =>
                  onFieldChange(`list[${index}].description`, e.target.value)
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name={`list[${index}].image`}
                value={item.image}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleFileChange(e, `list[${index}].image`)
                        }
                        style={{ display: "none" }}
                        id={`list[${index}].image`}
                      />

                      <label htmlFor={`list[${index}].image`}>
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
    </>
  );
};

export default Section2;
