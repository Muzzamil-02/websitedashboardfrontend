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
        Phases Section
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
        {formData.component?.map((item, index) => (
          <Grid
            container
            spacing={2}
            key={index}
            sx={{ marginBottom: 2, padding: "10px" }}
          >
            <Grid item xs={12}>
              <Typography variant="h6">Item {index + 1}</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                name={`component[${index}].title`}
                value={item.title}
                onChange={(e) =>
                  onFieldChange(`component[${index}]`, "title", e.target.value)
                }
                variant="outlined"
              />
            </Grid>
            {item.content?.map((content, subIndex) => (
              <Grid
                container
                spacing={2}
                key={subIndex}
                sx={{ padding: "10px" }}
              >
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Subtitle"
                    name={`component[${index}].content[${subIndex}].subtitle`}
                    value={content.subtitle}
                    onChange={(e) =>
                      onFieldChange(
                        `component[${index}].content[${subIndex}]`,
                        "subtitle",
                        e.target.value
                      )
                    }
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Description"
                    name={`component[${index}].content[${subIndex}].description`}
                    value={content.description}
                    onChange={(e) =>
                      onFieldChange(
                        `component[${index}].content[${subIndex}]`,
                        "description",
                        e.target.value
                      )
                    }
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            ))}

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Image URL"
                name={`component[${index}].imageURL`}
                value={item?.imageURL || ""}
                onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          handleFileChange(e, `component[${index}].imageURL`)
                        }
                        style={{ display: "none" }}
                        id={`uploading[${index}].imageURL`}
                      />
                      <label htmlFor={`uploading[${index}].imageURL`}>
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

export default Section5;
