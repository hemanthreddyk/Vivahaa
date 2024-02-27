import express from 'express'
import { createVenue, getAllVenues, getVenueById, updateVenueById, deleteVenueById, getVenuesByUserId } from '../../controllers/venueController.js'
import verifyJWT from '../../middleware/verifyJWT.js'

const router = express.Router()

router.get('/venues', getAllVenues) // Get all venues

router.use(verifyJWT)

// Routes for venues
router.post('/venues', createVenue) // Create a new venue
router.get('/venues/:id', getVenueById) // Get venue by ID
router.put('/venues/:id', updateVenueById) // Update venue by ID
router.delete('/venues/:id', deleteVenueById) // Delete venue by ID

router.get('/venues/user/:userId', getVenuesByUserId);

export default router
