import React from "react"
import Layout from "../../components/layout"
import Map from "../../components/map"

export default function Home() {
  return (
    <>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v1.9.0/mapbox-gl.css"
        rel="stylesheet"
      />

      <Layout>
        <Map />
      </Layout>
    </>
  )
}
