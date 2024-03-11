import axios from "../api/axios"
import endpoints from "../constants/endpoints"

const { mehendiArtists } = endpoints

let mehendiArtistsList = []

const MehendiArtistsService = {
  createMehendiArtist: async (axiosPrivate, mehendiArtistData) => {
    try {
      const method = mehendiArtists.create.method
      const url = mehendiArtists.create.url()

      const response = await axiosPrivate({
        url,
        method,
        data: mehendiArtistData
      })
      return response.data
    } catch (error) {
      throw new Error(error.response)
    }
  },
  getMehendiArtistsByUserId: async (axiosPrivate, userId) => {
    try {
      const method = mehendiArtists.byUserId.method
      const url = mehendiArtists.byUserId.url(userId)

      const response = await axiosPrivate({ url, method })
      return response.data
    } catch (error) {
      throw new Error(error.response)
    }
  },
  getAllMehendiArtists: async () => {
    try {
      if (!mehendiArtistsList.length) {
        const method = mehendiArtists.all.method
        const url = mehendiArtists.all.url()
        const response = await axios({
          url,
          method,
          headers: { "Content-Type": "application/json" }
        })

        mehendiArtistsList = [...response.data]
      }
      return mehendiArtistsList
    } catch (error) {
      throw new Error(error.response)
    }
  },
}

export default MehendiArtistsService
