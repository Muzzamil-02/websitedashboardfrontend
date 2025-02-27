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
        onFieldChange(fieldName, url);
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
        Enhanced Access to Capital
      </Typography>
      {formData.component?.map((component, index) => (
        <div key={index}>
          <Typography variant="h6" gutterBottom>
            {`Element ${index + 1}`}
          </Typography>
          <Grid container spacing={2} key={index} sx={{ marginBottom: 2 }}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="title"
                name={`component[${index}].title`}
                value={component.title}
                onChange={(e) =>
                  onFieldChange(`component[${index}]`, "title", e.target.value)
                }
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Description"
                name={`component[${index}].description`}
                value={component.description}
                onChange={(e) =>
                  onFieldChange(
                    `component[${index}]`,
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
                label="Logo URL"
                name={`component[${index}].logoURL`}
                value={component.logoURL}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleFileChange(e, `component[${index}].logoURL`)
                        }
                        style={{ display: "none" }}
                        id={`uploadingsection7[${index}].section7`}
                      />
                      <label htmlFor={`uploadingsection7[${index}].section7`}>
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
        </div>
      ))}
    </>
  );
};

export default Section7;
