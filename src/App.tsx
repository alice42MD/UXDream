import Batt from "./components/Batt"
import Geo from "./components/Geo"
import Motion from "./components/Motion"
import Volume from "./components/Volume"

const App = () => {
  return (
    <>
      <h1>UI dream</h1>
      <div>
        <>
          <div>Random</div>
          <Volume ui="randomize" />
        </>
        <>
          <div>Click click click</div>
          <Volume ui="clickToDeath" />
        </>
        <>
          <div>Tilt</div>
          <Volume ui="tilt" />
        </>
        <>
          <div>Draw</div>
          <Volume ui="draw" />
        </>
      </div>
      <>
        <div>Screaaaaaaaaaaam</div>
        <Volume ui="scream" />
      </>

      <>
        <div>Batt</div>
        <Batt />
      </>
      <>
        <div>Geo</div>
        <Geo />
      </>
      <>
        <div>Motion</div>
        <Motion />
      </>
    </>
  )
}

export default App
