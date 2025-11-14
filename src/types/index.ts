export interface ParkingLot {
  id: number;
  name: string;
  total_spaces: number;
  occupied_spaces: number;
  available_spaces: number;
  created_at: Date;
  updated_at: Date;
}

export interface Vehicle {
  id: number;
  parking_lot_id: number;
  plate_number: string;
  duration_start: Date;
  duration_end?: Date;
  created_at: Date;
}