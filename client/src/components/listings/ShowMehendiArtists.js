import React, { useState } from 'react'
import MehendiCard from './MehendiCard'
import useMehendiArtists from '../../hooks/useMehendiArtists'
import VendorPageHeader from './VendorPageHeader'
import { Box } from '@mui/material'

const ShowMehendiArtists = () => {
  const [searchKey, setSearchKey] = useState()
  const mehendiArtists = useMehendiArtists(searchKey)

  return (
    <Box display="flex" flexDirection="column" alignItems="flex-start" width={'100%'}>
      <VendorPageHeader title="Mehendi Artists" count={mehendiArtists.length} setSearchKey={setSearchKey}/>
      {
        mehendiArtists.length ?
        mehendiArtists.map((artist) => (
          <MehendiCard key={artist._id} artistDetails={artist} />
        )) :
        <p>No mehendi artists available.</p>
      }
    </Box>
  )
}

export default ShowMehendiArtists
