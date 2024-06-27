export interface ChatItem {
  id: number,
  name: string
}

export interface TelegramChat {
  id: number;
  name: string;
  image?: string | null
}

export interface TelegramFile {
  fileId: string;
  filePath: string
}

export interface AddressComponents {
  city: string;
  address: string;
}

export interface GPSCoordinates {
  latitude: number,
  longitude: number
}

export interface Location {
  latitude: number,
  longitude: number,
  address: string,
  timestamp_from: number,
  timestamp_to?: number
}

export type Locations = Location[]

export interface LeafletMap {
  leafletObject: any
}

export interface LogEntry {
  timestamp: Date;
  level: 'log' | 'info' | 'warning' | 'error';
  message: string;
  tag?: string;
  object?: any;
}