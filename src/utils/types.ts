export interface filter {
  location: string
  propertyType: string
  moveInDate: Date
  price: {
    low: number
    high: number
  }
}
export interface Dimension {
  height: number
  width: number
}

export interface Property {
  name: string
  address: string
  city: string
  img: string
  beds: number
  bathroom: number
  dimension: Dimension
  type: string
  price: number
}
