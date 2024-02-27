import express from 'express'
import { createMehendiArtist, getAllMehendiArtists, getMehendiArtistById, updateMehendiArtistById, deleteMehendiArtistById, getMehendiArtistsByUserId } from '../../controllers/mehendiArtistsController.js'
import verifyJWT from '../../middleware/verifyJWT.js'

const router = express.Router()

router.get('/mehendi-artists', getAllMehendiArtists) // Get all mehendi artists

router.use(verifyJWT)

// Routes for mehendi artists
router.post('/mehendi-artists', createMehendiArtist) // Create a new mehendi artist
router.get('/mehendi-artists/:id', getMehendiArtistById) // Get mehendi artist by ID
router.put('/mehendi-artists/:id', updateMehendiArtistById) // Update mehendi artist by ID
router.delete('/mehendi-artists/:id', deleteMehendiArtistById) // Delete mehendi artist by ID

router.get('/mehendi-artists/user/:userId', getMehendiArtistsByUserId)

export default router
