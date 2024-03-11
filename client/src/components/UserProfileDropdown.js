import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material'
import { AccountCircle } from '@mui/icons-material'
import { Link, useNavigate } from 'react-router-dom'
import useLogout from '../hooks/useLogout'
import LoginUserContext from '../context/LoginUserProvider'

const UserProfileDropdown = () => {
  const navigate = useNavigate()
  const logout = useLogout()
  const [anchorEl, setAnchorEl] = useState(null)
  const { user } = useContext(LoginUserContext)
  const profilePicString = user?.mypic

  useEffect(() => {
    return () => {
      // Cleanup function to set anchorEl to null when component unmounts
      setAnchorEl(null)
    }
  }, [])

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const signOut = async () => {
    await logout()
    handleMenuClose()
    navigate('/')
  }

  const profileDropdownItems = useMemo(() => {
    return [
      {
        label: 'Profile',
        onClick: () => handleMenuClose(),
        to: '/user/profile',
      },
      user?.roles.includes(5151) && {
        label: 'Vendor Dashboard',
        onClick: () => handleMenuClose(),
        to: '/vendor-dashboard',
      },
      {
        label: 'Sign Out',
        onClick: signOut,
      },
    ].filter(Boolean);
  }, [user])

  return (
    <>
      <IconButton onClick={handleMenuOpen}>
        <Avatar alt={user?.fullName} src={profilePicString}>
          <AccountCircle />
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {profileDropdownItems.map((item) => (
          <MenuItem key={item.label} onClick={item.onClick}>
            {item.to ? <Link to={item.to}>{item.label}</Link> : item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default UserProfileDropdown
