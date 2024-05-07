export interface Contact {
  name: string
  subject: string
  email: string
  message: string
}

export interface EcoSystem {
  id: string
  name: string
  description: string
  totalAcres: number
  landOwner: string
  outerEntity: string
  county: string
  state: string
  latitudeCenter: number
  longitudeCenter: number
  elevation: number
  fTotalImages: number
  fIdentifiedSpecies: number
}
