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

const Section6 = ({ formData, onFieldChange }) => {
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
        Data Insights and Capacity Building
      </Typography>
      <Grid container spacing={2}>
        {formData.members.map((member, index) => (
          <Grid item xs={12} key={index} style={{ padding: "10px" }}>
            <TextField
              fullWidth
              sx={{ marginBottom: "15px" }}
              label="Name"
              name={`members[${index}].name`}
              value={member.name}
              onChange={(e) => onFieldChange(e.target.name, e.target.value)}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Title"
              sx={{ marginBottom: "15px" }}
              name={`members[${index}].title`}
              value={member.title}
              onChange={(e) => onFieldChange(e.target.name, e.target.value)}
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Image URL"
              sx={{ marginBottom: "15px" }}
              name={`members[${index}].image`}
              value={member.image}
              onChange={(e) => onFieldChange(e.target.name, e.target.value)}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        handleFileChange(e, `component.${index}.imageURL`)
                      }
                      style={{ display: "none" }}
                      id={`members[${index}].image`}
                    />

                    <label htmlFor={`members[${index}].image`}>
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
              label="LinkedIn URL"
              sx={{ marginBottom: "15px" }}
              name={`members[${index}].linkedIn`}
              value={member.linkedIn}
              onChange={(e) => onFieldChange(e.target.name, e.target.value)}
              variant="outlined"
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Section6;
