import properties from "../data/properties.json"
import { filter, Property } from "./types"

export function filterProperties(filter: filter): Property[] {
  return properties.filter((property) => {
    return (
      property.city === filter.location &&
      filter.price.low <= property.price &&
      filter.price.high >= property.price &&
      filter.propertyType === property.type
      //   && new Date(property)
    )
  })
}
