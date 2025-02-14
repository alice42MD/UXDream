import useGeoLocation from "./useLocation"

const Demo = () => {
  const { location } = useGeoLocation()

  // const [alt, setalt] = useState()
  if (!location) return
  return (
    <pre>
      <div>{location.lat}</div>
      <div> {location.lng}</div>
    </pre>
  )
}
export default Demo
