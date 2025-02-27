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

const Section7 = ({ formData, onFieldChange }) => {
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
      {/* Section Heading */}
      <Typography variant="h5" gutterBottom>
        Technology Features
      </Typography>

      {/* Heading Input */}
      {/* <Grid container spacing={2}>
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
      </Grid> */}

      {/* Card Data Section */}

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {formData.cardData &&
          Object.keys(formData.cardData).map((key) => (
            <Grid item xs={12} md={4} key={key}>
              <Paper
                sx={{
                  padding: 3,
                  borderRadius: 2,
                  boxShadow: 3,
                  textAlign: "center",
                }}
              >
                {/* <Image
                  src={formData.cardData[key].imageURL}
                  alt={formData.cardData[key].heading}
                  width={80}
                  height={80}
                /> */}

                <Typography variant="h6" sx={{ marginTop: 2 }}>
                  {formData.cardData[key].heading}
                </Typography>

                <TextField
                  fullWidth
                  label="Image URL"
                  name={`cardData.${key}.imageURL`}
                  value={formData.cardData[key].imageURL || ""}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleFileChange(e, `cardData.${key}.imageURL`)
                          }
                          style={{ display: "none" }}
                          id={`cardData.${key}.imageURL`}
                        />

                        <label htmlFor={`cardData.${key}.imageURL`}>
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

                <TextField
                  fullWidth
                  label="Heading"
                  name={`cardData.${key}.heading`}
                  value={formData.cardData[key].heading}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                  sx={{ marginTop: 1 }}
                />

                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Description"
                  name={`cardData.${key}.description`}
                  value={formData.cardData[key].description}
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

export default Section7;
