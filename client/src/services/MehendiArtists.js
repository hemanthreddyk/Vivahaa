import endpoints from "../constants/endpoints"

const { mehendiArtists } = endpoints

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
  }
}

export default MehendiArtistsService
