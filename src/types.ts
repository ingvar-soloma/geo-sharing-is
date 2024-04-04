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