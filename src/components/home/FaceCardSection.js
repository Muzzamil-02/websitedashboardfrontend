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

const FaceCardSection = ({ formData, onFieldChange, slug }) => {
  if (!formData || Object.keys(formData).length === 0 || !formData.list?.length)
    return null;
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

  console.log("facecard", formData);
  return (
    <>
      <Typography variant="h5" gutterBottom>
        {slug}
      </Typography>

      <Grid container spacing={2}>
        {formData.list?.map((member, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <div className="bg-white shadow-lg rounded-2xl p-4 text-center">
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  // label="Image URL"
                  name={`list[${index}].imageUrl`}
                  value={formData.list[index]?.imageUrl || ""}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) =>
                            handleFileChange(e, `list[${index}].imageUrl`)
                          }
                          style={{ display: "none" }}
                          id={`list[${index}].imageUrl`}
                        />

                        <label htmlFor={`list[${index}].imageUrl`}>
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
              <Typography variant="h6" gutterBottom>
                {member.name}
              </Typography>
              <TextField
                fullWidth
                label="Designation"
                name={`list[${index}].designation`}
                value={member.designation}
                onChange={(e) =>
                  onFieldChange(`list[${index}].designation`, e.target.value)
                }
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Role"
                name={`list[${index}].role`}
                value={member.role}
                onChange={(e) =>
                  onFieldChange(`list[${index}].role`, e.target.value)
                }
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Experience"
                name={`list[${index}].experience`}
                value={member.experience}
                onChange={(e) =>
                  onFieldChange(`list[${index}].experience`, e.target.value)
                }
                variant="outlined"
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default FaceCardSection;
