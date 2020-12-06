import React, { useRef, useEffect, useState } from "react"
import mapboxgl from "mapbox-gl"
import styled from "styled-components"

mapboxgl.accessToken =
  "pk.eyJ1IjoiYWF0aGFuOTMiLCJhIjoiY2psdGVqdGhrMDVnaTNrbDgyZW9mZjBncSJ9.xQBdSA7YMBS_1Lnkj2nZ5Q"

const StyledDiv = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute !important;
  right: 0;
  overflow: hidden !important;
`

const App = () => {
  const [latitude, setLatitude] = useState("")

  const mapContainerRef = useRef(null)

  // initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // See style options here: https://docs.mapbox.com/api/maps/#styles
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 5,
      center: [16.43703185744272, 48.25971027218685],
      lngLat: 8.26535927971858,
    })
    map.on("click", function (e) {
      console.log(
        "A click event has occurred at " + e.lngLat.lng + " " + e.lngLat.lat
      )
      setLatitude(e.lngLat.lng)
    })

    // add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "bottom-right")

    // clean up on unmount
    return () => map.remove()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  console.log("state:", latitude)
  return (
    <>
      <StyledDiv className="map-container" ref={mapContainerRef} />
    </>
  )
}

export default App
