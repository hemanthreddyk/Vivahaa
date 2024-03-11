import endpoints from "../constants/endpoints"

const { user } = endpoints

export const getUserDetails = async (axiosPrivate, userId) => {
  const url = user.getProfile.url(userId)
  const method = user.getProfile.method

  const response = await axiosPrivate({
    url,
    method
  })

  return response.data
}

export const updateUserProfile = async (axiosPrivate, userId, userData) => {
  const url = user.updateProfile.url(userId)
  const method = user.updateProfile.method

  const response = await axiosPrivate({
    url,
    method,
    data: userData // The data to be updated, e.g., { fullName: 'New Name', email: 'new@example.com' }
  })

  return response.data
}
