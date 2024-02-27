import React, { useContext, useState } from 'react'
import { Grid, Card, CardContent, CardMedia, Typography, CardActionArea, Modal, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
import venuesLogo from '../../images/venues.jpeg'
import photographersLogo from '../../images/photographers.webp'
import mehendiLogo from '../../images/mehendi-artists.jpg'
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp'
import GridWithClickableCards from '../GridWithClickableCards'
import LoginUserContext from '../../context/LoginUserProvider'

// const gridItemsList = [
//   {
//     title: 'Evergreen Garden Estate',
//     content: 'Find the perfect location for your special day.',
//     logo: venuesLogo,
//   },
//   {
//     title: 'Harmony Hall',
//     content: 'Capture every moment with the best professionals.',
//     logo: photographersLogo,
//   }
// ]

const AddServiceCard = ({ handleCardClick }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderWidth: '4px', borderStyle: 'dashed', borderColor: 'primary.main' }} variant="outlined">
      <CardActionArea sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }} onClick={handleCardClick}>
        <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <AddCircleSharpIcon fontSize="large" color='primary' />
          <Typography variant="body1" align="center">
            Add New Service
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

const createGridItems = (gridItemsList) => {
  return gridItemsList.map((item, index) => (
    <Grid item xs={12} sm={6} md={4} key={index}>
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
    </Grid>
  ))
}


const MyServices = () => {
  const [open, setOpen] = React.useState(false)
  const { venues, mehendiArtists } = useContext(LoginUserContext)

  const venuesList = venues.map(v => {
    return {
      title: v.businessName,
      content: v.description,
      logo: venuesLogo,
    }
  })

  const mehendiArtistsList = mehendiArtists.map(m => {
    return {
      title: m.businessName,
      content: m.workDescription,
      logo: mehendiLogo,
    }
  })

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const descriptionElementRef = React.useRef(null)
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef
      if (descriptionElement !== null) {
        descriptionElement.focus()
      }
    }
  }, [open])


  const gridItems = createGridItems([...venuesList, ...mehendiArtistsList])
  gridItems.unshift(<Grid item xs={12} sm={6} md={4} key='add-service'><AddServiceCard handleCardClick={handleClickOpen} /></Grid>)
  return (
    <>
      <Grid container spacing={2}>
        {gridItems}
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth={true}
        maxWidth='md'
        scroll={'paper'}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Select the Services You Offer</DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <GridWithClickableCards />

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default MyServices
