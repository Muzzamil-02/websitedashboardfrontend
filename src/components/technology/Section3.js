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
    <>
      <Typography variant="h5" gutterBottom>
        Tailored Solutions for Businesses & Investors Section
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
        {Object.keys(formData.cardData || {}).map((key) => (
          <Grid container spacing={2} key={key} sx={{ marginBottom: 2 }}>
            <Grid item xs={12}>
              <Typography variant="h6">{key}</Typography>
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Image URL"
                name={`cardData.${key}.imgURL`}
                value={formData.cardData?.[key]?.imgURL || ""}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleFileChange(e, `cardData.${key}.imgURL`)
                        }
                        style={{ display: "none" }}
                        id={`cardData.${key}.imgURL`}
                      />

                      <label htmlFor={`cardData.${key}.imgURL`}>
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
                label="Heading"
                name={`cardData.${key}.heading`}
                value={formData.cardData?.[key]?.heading || ""}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name={`cardData.${key}.description`}
                value={formData.cardData?.[key]?.description || ""}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
              />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Section3;
