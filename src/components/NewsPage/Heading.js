import React from "react";

const heading = ({ formData, onFieldChange, slug }) => {
  return (
    <div>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Heading"
          name="heading"
          value={formData?.heading}
          onChange={(e) => onFieldChange(e.target.name, e.target.value)}
          variant="outlined"
        />
      </Grid>
    </div>
  );
};

export default heading;
