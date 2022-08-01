import FilterBar from "./components/FilterBar"
import locations from "./data/locations.json"
import propertyTypes from "./data/propertyTypes.json"
import { filter, Property } from "./utils/types"
import { useState } from "react"
import PropertyList from "./components/PropertyList"

function App() {
  const [searchResults, setSearchResults] = useState<Property[]>([])
  return (
    <>
      <h1 className="text-4xl font-bold text-center p-8">Search Properties to rent</h1>
      <FilterBar setSearchResults={setSearchResults} />
      <PropertyList searchResults={searchResults} />
    </>
  )
}


export default App
