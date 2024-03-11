import React, { useState } from 'react'
import VenueCard from './VenueCard'
import useVenues from '../../hooks/useVenues'
import VendorPageHeader from './VendorPageHeader'
import { Box, Typography } from '@mui/material'

const ShowVenues = () => {
  const [searchKey, setSearchKey] = useState()
  const venues = useVenues(searchKey)

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" width={'100%'}>
      <VendorPageHeader title="Venues" count={venues.length} setSearchKey={setSearchKey}/>
      {
        venues.length ?
        venues.map((venue) => (
          <VenueCard key={venue._id} venueDetails={venue} />
        )) :
        <Box
        display="flex"
        justifyContent="center"
        width={'100%'}
      >
        <Typography variant="body1">No venues available.</Typography>
      </Box>
      }
    </Box>
  )
}

export default ShowVenues
