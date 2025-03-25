import { useState } from 'react'
import GetSourceTypeByUrl from './Identification'
import './App.css'

function App() {
 
  const mapServerUrl = "https://maritimeboundaries.noaa.gov/arcgis/rest/services/MaritimeBoundaries/US_Maritime_Limits_Boundaries/MapServer";
  return (<h1>Omnilayers {GetSourceTypeByUrl(mapServerUrl)}!</h1>)
}

export default App
