import React from 'react'
import { Card, CardContent, Typography, Box, CircularProgress, Button } from '@mui/material'
import RoomIcon from '@mui/icons-material/Room'
import DisplayImagesList from './DisplayImagesList'

const VenueCard = ({ venueDetails }) => {
  return (
    <Card sx={{ margin: '10px 0px', width: 900, boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.05)' }}>
      <CardContent>
        {venueDetails ? (
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', height: 250, borderRadius: 10 }}>
            <Box sx={{ flexBasis: '33%', height: '100%' }}>
              <DisplayImagesList images={venueDetails.portfolioImages} />
            </Box>

            <Box sx={{ flexBasis: '67%', height: '100%' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box sx={{ padding: '16px', borderRadius: '8px' }}>
                  <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{venueDetails.businessName}</Typography>
                </Box>
                <Box sx={{ padding: '0px 16px' }}>
                  <Box sx={{ display: 'flex' }}>
                    <RoomIcon sx={{ color: 'grey' }} />
                    <Typography sx={{ marginBottom: '8px', color: 'grey' }}>{venueDetails.address}</Typography>
                  </Box>
                </Box>

                <Box sx={{ padding: '8px 16px 8px 16px' }}>
                  <Typography sx={{ marginBottom: '8px', color: 'grey' }}>Price Quote</Typography>
                  <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>{venueDetails.priceQuote}</Typography>
                </Box>

                <Box sx={{ padding: '2px 16px', width: '580px' }}>
                  <Typography noWrap>{venueDetails.description}</Typography>
                </Box>
              </Box>

              <Box sx={{ padding: '10px 16px', display: 'flex', flexDirection: 'row-reverse' }}>
                <Button variant="contained" size="medium">
                  Send Message
                </Button>
              </Box>
            </Box>

          </Box>
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 250 }}>
            <CircularProgress />
          </Box>
        )}
      </CardContent>
    </Card>
  )
}

export default VenueCard
