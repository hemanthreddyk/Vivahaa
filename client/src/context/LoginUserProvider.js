import { createContext, useEffect, useState } from 'react'
import { getUserDetails } from '../services/User'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import useAuth from '../hooks/useAuth'

const LoginUserContext = createContext({})

export const LoginUserProvider = ({ children }) => {
  const { isLogged, auth } = useAuth()
  const axiosPrivate = useAxiosPrivate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    if (isLogged) {
      setLoading(true)
      getUserDetails(axiosPrivate, auth.id)
        .then(userData => setUser(userData))
        .catch(error => console.error('Error fetching user details:', error))
        .finally(() => {
          setLoading(false)
        })
    } else {
      setUser(null) // Clear user details if the user is not logged in
    }
  }, [auth.id])


  return (
    <LoginUserContext.Provider value={{ user, setUser, fetchUserInProgress: loading }}>
      {children}
    </LoginUserContext.Provider>
  )
}

export default LoginUserContext