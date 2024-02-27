import React, { useContext } from 'react'
import { TextField, Typography, Box, Container, Button, MenuItem, FormControl, InputLabel, Select, Chip, Input } from '@mui/material'
import { useForm, Controller } from 'react-hook-form'
import VenuesService from '../../../services/Venues'
import useAxiosPrivate from '../../../hooks/useAxiosPrivate'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router'
import LoginUserContext from '../../../context/LoginUserProvider'

const Cuisine_Types = ['Italian', 'Mexican', 'Indian']
const Facility_Types = ['Parking', 'Wi-Fi', 'Projector']

const Venue = () => {
  const axiosPrivate = useAxiosPrivate()
  const { enqueueSnackbar } = useSnackbar()
  const navigate = useNavigate()
  const { setVenues } = useContext(LoginUserContext)

  
  // const defaultValues = {
  //   businessName: 'Default Business Name',
  //   address: 'Default Address',
  //   priceQuote: 'Default Price Quote',
  //   description: 'Default Description',
  //   contactInfo: 'Default Contact Info',
  //   seatingCapacity: 'Default Seating Capacity',
  //   cuisinesAvailable: ['Italian', 'Mexican'], // Default selected cuisines
  //   facilitiesAvailable: ['Parking', 'Wi-Fi'], // Default selected facilities
  //   pricePerPlateVeg: 'Default Price Per Plate - Veg',
  //   pricePerPlateNonVeg: 'Default Price Per Plate - Non-Veg',
  // }
  const defaultValues = {
    businessName: `Sample Venue ${Math.floor(Math.random() * 10000)}`,
    address: '123 Main Street, City, Country',
    priceQuote: '$1000 - $1500',
    description: 'A beautiful venue for weddings and events, featuring modern amenities and elegant decor.',
    contactInfo: 'info@example.com | +1 (123) 456-7890',
    seatingCapacity: '150',
    cuisinesAvailable: ['Italian', 'Mexican'], // Default selected cuisines
    facilitiesAvailable: ['Parking', 'Wi-Fi'], // Default selected facilities
    pricePerPlateVeg: '$20 per plate',
    pricePerPlateNonVeg: '$25 per plate',
  }

  const { handleSubmit, register, formState: { errors }, control } = useForm({ defaultValues })

  const placeholderValues = {
    businessName: "Enter your business name",
    address: "Enter your business address",
    priceQuote: "Enter the price quote",
    description: "Describe your service and venue",
    contactInfo: "Enter contact information",
    seatingCapacity: "Enter the seating capacity",
    cuisinesAvailable: "Select cuisines available",
    facilitiesAvailable: "Select facilities available",
    pricePerPlateVeg: "Enter price per plate for vegetarian menu",
    pricePerPlateNonVeg: "Enter price per plate for non-vegetarian menu",
  }

  const onSubmit = async (data) => {
    try {
      const venueInfo = await VenuesService.createVenue(axiosPrivate, data)
      
      setVenues(prevVenues => {
        return [
          venueInfo,
          ...(prevVenues.filter(m => m._id !== venueInfo._id))
        ]
      })
      enqueueSnackbar('Venue created successfully', {
        variant: 'success', anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
      navigate('/vendor-dashboard', { replace: true })
    } catch (error) {
      console.log(error)
      enqueueSnackbar('Error while creating a venue', {
        variant: 'success', anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
    }
  }

  return (
    <Container component="main" maxWidth="xl">
      <Typography variant="h3" align="center" sx={{ mb: 2 }}>Venue Profile Creation</Typography>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          fullWidth
          label="Business Name"
          {...register('businessName', { required: 'Business Name is required' })}
          error={!!errors.businessName}
          helperText={errors.businessName && errors.businessName.message}
          sx={{ mb: 2 }}
          placeholder={placeholderValues.businessName}
        />
        <TextField
          fullWidth
          label="Address"
          {...register('address', { required: 'Address is required' })}
          error={!!errors.address}
          helperText={errors.address && errors.address.message}
          sx={{ mb: 2 }}
          placeholder={placeholderValues.address}
        />
        <TextField
          fullWidth
          label="Price Quote"
          {...register('priceQuote', { required: 'Price Quote is required' })}
          error={!!errors.priceQuote}
          helperText={errors.priceQuote && errors.priceQuote.message}
          sx={{ mb: 2 }}
          placeholder={placeholderValues.priceQuote}
        />
        <TextField
          fullWidth
          label="Description of the Service and Venue"
          {...register('description', { required: 'Description is required' })}
          error={!!errors.description}
          helperText={errors.description && errors.description.message}
          sx={{ mb: 2 }}
          placeholder={placeholderValues.description}
          multiline
          rows={4}
        />
        <TextField
          fullWidth
          label="Contact Info"
          {...register('contactInfo', { required: 'Contact Info is required' })}
          error={!!errors.contactInfo}
          helperText={errors.contactInfo && errors.contactInfo.message}
          sx={{ mb: 2 }}
          placeholder={placeholderValues.contactInfo}
        />
        <TextField
          fullWidth
          label="Seating Capacity"
          {...register('seatingCapacity', { required: 'Seating Capacity is required' })}
          error={!!errors.seatingCapacity}
          helperText={errors.seatingCapacity && errors.seatingCapacity.message}
          sx={{ mb: 2 }}
          placeholder={placeholderValues.seatingCapacity}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="cuisines-available-label">Cuisines Available</InputLabel>
          <Controller
            name="cuisinesAvailable"
            control={control}
            defaultValue={[]}
            rules={{ required: 'Cuisines Available is required' }}
            render={({ field }) => (
              <Select
                {...field}
                labelId="cuisines-available-label"
                id="cuisines-available"
                label="Cuisines Available"
                multiple
                error={!!errors.cuisinesAvailable}
                placeholder={placeholderValues.cuisinesAvailable}
                sx={{ minWidth: 120 }}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {
                  Cuisine_Types.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))
                }
              </Select>
            )}
          />
          {errors.cuisinesAvailable && (
            <Typography variant="caption" color="error">
              {errors.cuisinesAvailable.message}
            </Typography>
          )}
        </FormControl>

        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="facilities-available-label">Facilities Available</InputLabel>
          <Controller
            name="facilitiesAvailable"
            control={control}
            defaultValue={[]}
            rules={{ required: 'Facilities Available is required' }}
            render={({ field }) => (
              <Select
                {...field}
                labelId="facilities-available-label"
                id="facilities-available"
                label="Facilities Available"
                multiple
                error={!!errors.facilitiesAvailable}
                placeholder={placeholderValues.facilitiesAvailable}
                sx={{ minWidth: 120 }}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
              >
                {Facility_Types.map((name) => (
                  <MenuItem key={name} value={name}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
          {errors.facilitiesAvailable && (
            <Typography variant="caption" color="error">
              {errors.facilitiesAvailable.message}
            </Typography>
          )}
        </FormControl>

        <TextField
          fullWidth
          label="Price Per Plate - Veg"
          {...register('pricePerPlateVeg', { required: 'Price Per Plate - Veg is required' })}
          error={!!errors.pricePerPlateVeg}
          helperText={errors.pricePerPlateVeg && errors.pricePerPlateVeg.message}
          sx={{ mb: 2 }}
          placeholder={placeholderValues.pricePerPlateVeg}
        />

        
        <TextField
          fullWidth
          label="Price Per Plate - Non-Veg"
          {...register('pricePerPlateNonVeg', { required: 'Price Per Plate - Non-Veg is required' })}
          error={!!errors.pricePerPlateNonVeg}
          helperText={errors.pricePerPlateNonVeg && errors.pricePerPlateNonVeg.message}
          sx={{ mb: 2 }}
          placeholder={placeholderValues.pricePerPlateNonVeg}
        />

        {/* Portfolio of Past Work (Upload Photos) */}
        {/* <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel htmlFor="portfolio-photos">Portfolio of Past Work (Upload Photos)</InputLabel>
          <Input
            id="portfolio-photos"
            type="file"
            multiple
            {...register('portfolioPhotos', { required: 'Portfolio photos are required' })}
            error={!!errors.portfolioPhotos}
            inputProps={{
              accept: 'image/*', // Accept only image files
            }}
          />
          {errors.portfolioPhotos && (
            <Typography variant="caption" color="error">
              {errors.portfolioPhotos.message}
            </Typography>
          )}
        </FormControl> */}

        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  )
}

export default Venue
