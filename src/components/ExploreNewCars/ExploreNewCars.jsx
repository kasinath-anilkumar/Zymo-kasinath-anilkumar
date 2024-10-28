import React from 'react'
import ExploreCars from "./ExploreCars/ExploreCars"
import MostSearchCars from "./MostSearchCars/MostSearchCars.jsx"
import LatestCars from "./LatestCars/LatestCars.jsx"

const ExploreNewCars = () => {
  return (
    <div>
      <ExploreCars />
      <MostSearchCars/>
      <LatestCars/>
    </div>
  )
}

export default ExploreNewCars
