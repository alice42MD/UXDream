import { useState, useEffect } from "react"

interface CustomLocation {
  lat: number
  lng: number
}

const useGeoLocation = () => {
  const [location, setLocation] = useState<CustomLocation>()

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error)
    } else {
      //handle ERROR
      console.log("Geolocation not supported")
    }
  }, [])

  function success(position: {
    coords: { latitude: number; longitude: number }
  }) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    setLocation({ lat: latitude, lng: longitude })
  }

  function error() {
    //handle ERROR
    console.log("Unable to retrieve your location")
  }
  return { location }
}

export default useGeoLocation
