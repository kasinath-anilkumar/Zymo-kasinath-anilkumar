import React from 'react'
import ExploreCars from "./ExploreCars/ExploreCars"
import MostSearchCars from "./MostSearchCars/MostSearchCars.jsx"
import LatestCars from "./LatestCars/LatestCars.jsx"
import ElectricCars from "./ElectricCars/ElectricCars.jsx"

const ExploreNewCars = () => {
  return (
    <div>
      <ExploreCars />
      <MostSearchCars/>
      <LatestCars/>
      <ElectricCars/>
    </div>
  )
}

export default ExploreNewCars
