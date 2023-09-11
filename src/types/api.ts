export interface APISpaceXResponse {
  docs: Doc[]
  totalDocs: number
  offset: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage: null
  nextPage: number
}

export interface Doc {
  fairings: Fairings
  links: Links
  static_fire_date_utc: Date
  static_fire_date_unix: number
  net: boolean
  window: number
  rocket: string
  success: boolean
  failures: Failure[]
  details: string
  crew: any[]
  ships: any[]
  capsules: any[]
  payloads: string[]
  launchpad: string
  flight_number: number
  name: string
  date_utc: Date
  date_unix: number
  date_local: Date
  date_precision: string
  upcoming: boolean
  cores: Core[]
  auto_update: boolean
  tbd: boolean
  launch_library_id: null
  id: string
}

export interface Core {
  core: string
  flight: number
  gridfins: boolean
  legs: boolean
  reused: boolean
  landing_attempt: boolean
  landing_success: null
  landing_type: null
  landpad: null
}

export interface Failure {
  time: number
  altitude: null
  reason: string
}

export interface Fairings {
  reused: boolean
  recovery_attempt: boolean
  recovered: boolean
  ships: any[]
}

export interface Links {
  patch: Patch
  reddit: Reddit
  flickr: Flickr
  presskit: null
  webcast: string
  youtube_id: string
  article: string
  wikipedia: string
}

export interface Flickr {
  small: any[]
  original: any[]
}

export interface Patch {
  small: string
  large: string
}

export interface Reddit {
  campaign: null
  launch: null
  media: null
  recovery: null
}
