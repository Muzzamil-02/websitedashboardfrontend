import { Grid, TextField, Typography, Avatar } from "@mui/material";
import React from "react";

const FaceCardSection = ({ formData, onFieldChange, slug }) => {
  if (!formData || Object.keys(formData).length === 0 || !formData.list?.length)
    return null;

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
                  label="imageUrl"
                  name="`list[${index}].imageUrl`"
                  value={formData.imageUrl}
                  onChange={(e) => onFieldChange(e.target.name, e.target.value)}
                  variant="outlined"
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
