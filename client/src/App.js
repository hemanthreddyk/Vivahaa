import React, { useContext } from 'react'
import { Routes, Route, Outlet, Navigate, useLocation } from 'react-router-dom'
import { CircularProgress, Container, AppBar, Toolbar, Box } from '@mui/material'
import HomePage from './components/HomePage'
import Login from './components/Login'
import PageHeader from './components/PageHeader'
import Footer from './components/Footer'
import useAuth from './hooks/useAuth'
import Register from './components/Register'
import PersistLogin from './components/PersistLogin'
import UserProfile from './components/UserProfile'
import LoginUserContext from './context/LoginUserProvider'
import Dashboard from './components/vendor/Dashboard'
import Venue from './components/vendor/forms/Venue'
import MehendiArtist from './components/vendor/forms/MehendiArtist'

function App() {
  const { isLogged } = useAuth()
  const location = useLocation()
  const { fetchUserInProgress } = useContext(LoginUserContext)
  const showOnlyCopyright = location.pathname === '/'

  return (
    <>
      {fetchUserInProgress ? (
        <CircularProgress color="primary" />
      ) : (
        <>
          <PageHeader />
          <Box
            sx={(theme) => ({
              // height: `calc(100vh - 261px)`,
              width: '100%',
              backgroundImage:
                theme.palette.mode === 'light'
                  ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
                  : 'linear-gradient(#02294F, #090E10)',
              backgroundSize: '100% 20%',
              backgroundRepeat: 'no-repeat',
            })}
          >
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 14, sm: 20 },
                pb: { xs: 4, sm: 6 },
              }}
            >
              <Routes>
                <Route element={<PersistLogin />}>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/user" element={<Outlet />} >
                    <Route path="profile" element={<UserProfile />} />
                  </Route>
                  <Route path="/vendor-dashboard" element={<Dashboard />} />
                  <Route path="/profile-creation" element={<Outlet />} >
                    <Route path="venue" element={<Venue />} />
                    <Route path="mehendi-artist" element={<MehendiArtist />} />
                    <Route path="decorator" element={<Venue />} />
                    <Route path="photographer" element={<Venue />} />
                  </Route>
                </Route>
                <Route path="/login" element={isLogged ? <Navigate to="/" replace /> : <Login />} />
                <Route path="/register" element={isLogged ? <Navigate to="/" replace /> : <Register />} />
              </Routes>
            </Container>
          </Box>

          {/* <AppBar position="static" className="homepage-footer bg-white"> */}
          <Footer showOnlyCopyright={!showOnlyCopyright} />
          {/* </AppBar> */}
        </>
      )}
    </>
  )
}

export default App
