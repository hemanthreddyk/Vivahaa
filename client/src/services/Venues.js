import axios from "../api/axios";
import endpoints from "../constants/endpoints";

const { venues } = endpoints

let venuesList = []

const VenuesService = {
  getAllVenues: async () => {
    try {
      if (!venuesList.length) {
        const method = venues.all.method
        const url = venues.all.url()

        const response = await axios({
          url,
          method,
          headers: { "Content-Type": "application/json" }
        })

        venuesList = [...response.data]
      }
      return venuesList
    } catch (error) {
      throw new Error(error.response)
    }
  },

  // getVenueById: async (id) => {
  //   try {
  //     const response = await axios.get(`${BASE_URL}/venues/${id}`);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(error.response.data.message);
  //   }
  // },

  createVenue: async (axiosPrivate, venueData) => {
    try {
      const method = venues.create.method
      const url = venues.create.url()

      const response = await axiosPrivate({
        url,
        method,
        data: venueData
      })
      return response.data;
    } catch (error) {
      throw new Error(error.response);
    }
  },

  // updateVenue: async (id, venueData) => {
  //   try {
  //     const response = await axios.put(`${BASE_URL}/venues/${id}`, venueData);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(error.response.data.message);
  //   }
  // },

  // deleteVenue: async (id) => {
  //   try {
  //     const response = await axios.delete(`${BASE_URL}/venues/${id}`);
  //     return response.data;
  //   } catch (error) {
  //     throw new Error(error.response.data.message);
  //   }
  // },

  getVenuesByUserId: async (axiosPrivate, userId) => {
    try {
      const method = venues.byUserId.method
      const url = venues.byUserId.url(userId)

      const response = await axiosPrivate({ url, method })
      return response.data;
    } catch (error) {
      throw new Error(error.response);
    }
  }
};

export default VenuesService;
