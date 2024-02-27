import express from 'express'
import { createVenue, getAllVenues, getVenueById, updateVenueById, deleteVenueById, getVenuesByUserId } from '../../controllers/venueController.js'
import verifyJWT from '../../middleware/verifyJWT.js'

const router = express.Router()

router.get('/all', getAllVenues) // Get all venues

router.use(verifyJWT)

// Routes for venues
router.post('/', createVenue) // Create a new venue
router.get('/:id', getVenueById) // Get venue by ID
router.put('/:id', updateVenueById) // Update venue by ID
router.delete('/:id', deleteVenueById) // Delete venue by ID

router.get('/user/:userId', getVenuesByUserId);

export default router
