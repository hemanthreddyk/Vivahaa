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
  },
  venues: {
    all: {
      method: HTTP_METHODS.GET,
      url: () => '/venues'
    },
    byId: {
      method: HTTP_METHODS.GET,
      url: (id) => `venues/${id}`
    },
    create: {
      method: HTTP_METHODS.POST,
      url: () => '/venues'
    },
    update: {
      method: HTTP_METHODS.PUT,
      url: (id) => `venues/${id}`
    },
    delete: {
      method: HTTP_METHODS.DELETE,
      url: (id) => `venues/${id}`
    },
    byUserId: {
      method: HTTP_METHODS.GET,
      url: (userId) => `venues/user/${userId}`
    }
  },
  mehendiArtists: {
    all: {
      method: HTTP_METHODS.GET,
      url: () => '/mehendi-artists'
    },
    byId: {
      method: HTTP_METHODS.GET,
      url: (id) => `mehendi-artists/${id}`
    },
    create: {
      method: HTTP_METHODS.POST,
      url: () => '/mehendi-artists'
    },
    update: {
      method: HTTP_METHODS.PUT,
      url: (id) => `mehendi-artists/${id}`
    },
    delete: {
      method: HTTP_METHODS.DELETE,
      url: (id) => `mehendi-artists/${id}`
    },
    byUserId: {
      method: HTTP_METHODS.GET,
      url: (userId) => `mehendi-artists/user/${userId}`
    }
  }
}

export default endpoints;
