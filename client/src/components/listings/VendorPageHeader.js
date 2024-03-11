import React from 'react';
import { Grid, Typography, TextField } from '@mui/material'

const VendorPageHeader = ({ title, count = 0, setSearchKey }) => {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      marginBottom={2}
      sx={{ width: '99%' }}
    >
      <Grid item>
        <Typography variant="h5" component="h1" fontWeight="bold" marginRight={5}>
          {title}
        </Typography>
        <Typography variant="body1" component="p" marginRight={5}>
          Showing <span style={{ fontWeight: 'bold' }}>{count} results</span> as per your search criteria
        </Typography>
      </Grid>
      <Grid item sx={{ flex: '0 0 auto', width: '40%' }}>
        <TextField
          variant="outlined"
          placeholder={`Search ${title}`}
          size="small"
          fullWidth
          onBlur={(e) => {
            setSearchKey(e.target.value)
          }}
        />
      </Grid>
    </Grid>
  );
};

export default VendorPageHeader;
