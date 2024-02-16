const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

const endpoints = {
  auth: {
    login: {
      method: HTTP_METHODS.POST,
      url: () => '/auth'
    }
  },
  user: {
    profile: {
      method: HTTP_METHODS.GET,
      url: (id) => `api/users/${id}`
    }
  }
}

export default endpoints
