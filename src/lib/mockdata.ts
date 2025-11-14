// Mock data for demonstration without database connection
export const mockParkingLots = [
  { id: 1, name: 'Main Lot A', total_spaces: 100, occupied_spaces: 15, available_spaces: 85 },
  { id: 2, name: 'Main Lot B', total_spaces: 150, occupied_spaces: 127, available_spaces: 23 },
  { id: 3, name: 'VIP Lot', total_spaces: 25, occupied_spaces: 5, available_spaces: 20 },
];

export const mockVehicles = [
  {
    id: 1,
    plate_number: 'ABC123',
    parking_lot_name: 'Main Lot A',
    duration_start: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 2,
    plate_number: 'XYZ789',
    parking_lot_name: 'Main Lot A',
    duration_start: new Date(Date.now() - 0.5 * 60 * 60 * 1000),
  },
  {
    id: 3,
    plate_number: 'DEF456',
    parking_lot_name: 'Main Lot B',
    duration_start: new Date(Date.now() - 1 * 60 * 60 * 1000),
  },
  {
    id: 4,
    plate_number: 'GHI789',
    parking_lot_name: 'VIP Lot',
    duration_start: new Date(Date.now() - 4 * 60 * 60 * 1000),
  },
];

export const mockStats = {
  total: 275,
  occupied: 147,
  available: 128,
};