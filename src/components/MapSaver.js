import React, { useContext } from 'react'
import { useMap } from 'react-leaflet'
import FilterContext from '../context/FilterContext';

const MapSaver = () => {

    const context = useContext(FilterContext)
    
    const map = useMap();

    context.setMap(map)
  return (
    <></>
  )
}

export default MapSaver