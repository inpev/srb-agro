export interface LatLng {
  lat: number;
  lng: number;
}

export interface Location {
  id: string;
  nombre: string;
  codigo?: string;
  latLng?: LatLng;
}