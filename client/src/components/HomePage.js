import React from 'react'
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea } from '@mui/material'
import { Link } from 'react-router-dom'
import '../css/HomePage.css'
import venuesLogo from '../images/venues.jpeg'
import photographersLogo from '../images/photographers.webp'
import makeupLogo from '../images/makeup-artists.jpeg'
import floristLogo from '../images/florist-decor.jpeg'
import musiciansLogo from '../images/musicians-dancers.jpg'
import panditsLogo from '../images/pandits.jpeg'
import foodcateringLogo from '../images/food-catering.jpeg'
import diyLogo from '../images/diy-assistance.jpg'
import mehendiLogo from '../images/mehendi-artists.jpg'

const gridItems = [
  {
    title: 'Mehendi Artists',
    content: 'Beautiful henna designs for your special occasions.',
    logo: mehendiLogo,
    link: '/mehendi-artists/all'
  },
  {
    title: 'Venues',
    content: 'Find the perfect location for your special day.',
    logo: venuesLogo,
    link: '/venues/all'
  },
  {
    title: 'Photographers',
    content: 'Capture every moment with the best professionals.',
    logo: photographersLogo,
  },
  {
    title: 'Make-up Artists',
    content: 'Look your best with expert make-up artists.',
    logo: makeupLogo,
  },
  {
    title: 'Florist and Decor',
    content: 'Beautiful arrangements to brighten your venue.',
    logo: floristLogo,
  },
  {
    title: 'Musicians and Dancers',
    content: 'Entertain your guests with live performances.',
    logo: musiciansLogo,
  },
  {
    title: 'Pandits',
    content: 'Find experienced pandits for traditional rituals.',
    logo: panditsLogo,
  },
  {
    title: 'Food/Catering Services',
    content: 'Delight your guests with exquisite cuisines.',
    logo: foodcateringLogo,
  },
  {
    title: 'DIY - Assistance',
    content: 'Get help with your do-it-yourself projects.',
    logo: diyLogo,
  },
]

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        {gridItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Link to={item.link} style={{ textDecoration: 'none' }}>
              <Card sx={{ height: '100%' }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.logo}
                    alt={item.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.content}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Card className="advertising-card">
            <CardContent>
              <Typography variant="h5" component="div" align="center">
                Advertising Space
              </Typography>
              <Typography variant="body2" component="div" align="center">
                Your ad could be here
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default HomePage
