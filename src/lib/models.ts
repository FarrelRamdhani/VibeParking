import pool from './database';
import { ParkingLot, Vehicle } from '@/types';
import { mockParkingLots, mockVehicles, mockStats } from './mockdata';

export async function getParkingLots(): Promise<ParkingLot[]> {
  try {
    const result = await pool.query('SELECT * FROM parking_lots ORDER BY id');
    return result.rows.map(row => ({
      ...row,
      occupied_spaces: parseInt(row.occupied_spaces),
      available_spaces: parseInt(row.available_spaces),
      total_spaces: parseInt(row.total_spaces),
      created_at: new Date(row.created_at),
      updated_at: new Date(row.updated_at)
    }));
  } catch (error) {
    console.warn('Database connection failed, using mock data for parking lots');
    return mockParkingLots;
  }
}

export async function getVehicles(): Promise<Vehicle[]> {
  try {
    const result = await pool.query(`
      SELECT v.*, pl.name as parking_lot_name 
      FROM vehicles v 
      JOIN parking_lots pl ON v.parking_lot_id = pl.id 
      ORDER BY v.created_at DESC
    `);
    return result.rows.map(row => ({
      ...row,
      duration_start: new Date(row.duration_start),
      duration_end: row.duration_end ? new Date(row.duration_end) : undefined,
      created_at: new Date(row.created_at)
    }));
  } catch (error) {
    console.warn('Database connection failed, using mock data for vehicles');
    return mockVehicles;
  }
}

export async function getParkingLotStats(): Promise<{total: number, occupied: number, available: number}> {
  try {
    const result = await pool.query(`
      SELECT 
        SUM(total_spaces) as total,
        SUM(occupied_spaces) as occupied,
        SUM(available_spaces) as available
      FROM parking_lots
    `);
    const stats = result.rows[0];
    return {
      total: parseInt(stats.total) || 0,
      occupied: parseInt(stats.occupied) || 0,
      available: parseInt(stats.available) || 0
    };
  } catch (error) {
    console.warn('Database connection failed, using mock data for stats');
    return mockStats;
  }
}