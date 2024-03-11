import { useEffect, useState } from "react"
import { useSnackbar } from 'notistack'
import VenuesService from "../services/Venues"

const useVenues = (searchKey) => {
  const [venues, setVenues] = useState([])
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    let isMounted = true

    VenuesService.getAllVenues()
      .then((venues) => {
        if (isMounted) {
          // Filter data based on searchKey
          let filteredVenues = venues
          if(searchKey) {
            filteredVenues = venues.filter(venue =>
              venue.businessName.toLowerCase().includes(searchKey.toLowerCase())
            );
          }
          
          setVenues(filteredVenues)
        }
      })
      .catch(() => (err) => {
        console.log(err)
        if (isMounted) {
          enqueueSnackbar('Error while fetching venues info', {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            }
          })
        }
      })

      return () => {
        isMounted = false
      }
  }, [searchKey])

  return venues
}

export default useVenues
