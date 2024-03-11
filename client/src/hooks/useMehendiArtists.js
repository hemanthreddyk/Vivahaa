import { useEffect, useState } from "react"
import { useSnackbar } from 'notistack'
import MehendiArtistsService from "../services/MehendiArtists"

const useMehendiArtists = (searchKey) => {
  const [mehendiArtists, setMehendiArtists] = useState([])
  const { enqueueSnackbar } = useSnackbar()

  useEffect(() => {
    let isMounted = true

    MehendiArtistsService.getAllMehendiArtists()
      .then((allMehendiArtists) => {
        if (isMounted) {
          // Filter data based on searchKey
          let filteredMehendiArtists = allMehendiArtists
          if(searchKey) {
            filteredMehendiArtists = allMehendiArtists.filter(artist =>
              artist.businessName.toLowerCase().includes(searchKey.toLowerCase())
            );
          }
          
          setMehendiArtists(filteredMehendiArtists)
        }
      })
      .catch((err) => {
        console.log(err)
        if (isMounted) {
          enqueueSnackbar('Error while fetching mehendi artists info', {
            variant: 'error',
            anchorOrigin: {
              vertical: 'top',
              horizontal: 'right'
            }
          })
        }
      })

    // Cleanup function to cancel any ongoing tasks
    return () => {
      isMounted = false
    }
  }, [searchKey])

  return mehendiArtists
}

export default useMehendiArtists
