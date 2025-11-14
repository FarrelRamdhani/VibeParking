const pool = require('./src/lib/database.ts');

async function initializeDatabase() {
  try {
    // Create tables
    await pool.query(`
      CREATE TABLE IF NOT EXISTS parking_lots (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        total_spaces INTEGER NOT NULL DEFAULT 100,
        occupied_spaces INTEGER NOT NULL DEFAULT 0,
        available_spaces INTEGER NOT NULL DEFAULT 100,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS vehicles (
        id SERIAL PRIMARY KEY,
        parking_lot_id INTEGER REFERENCES parking_lots(id),
        plate_number VARCHAR(20) NOT NULL,
        duration_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        duration_end TIMESTAMP,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // Insert sample data
    await pool.query(`
      INSERT INTO parking_lots (name, total_spaces, occupied_spaces, available_spaces) 
      VALUES 
        ('Main Lot A', 100, 15, 85),
        ('Main Lot B', 150, 127, 23),
        ('VIP Lot', 25, 5, 20)
      ON CONFLICT DO NOTHING
    `);

    await pool.query(`
      INSERT INTO vehicles (parking_lot_id, plate_number, duration_start) 
      VALUES 
        (1, 'ABC123', CURRENT_TIMESTAMP - INTERVAL '2 hours'),
        (1, 'XYZ789', CURRENT_TIMESTAMP - INTERVAL '30 minutes'),
        (2, 'DEF456', CURRENT_TIMESTAMP - INTERVAL '1 hour'),
        (3, 'GHI789', CURRENT_TIMESTAMP - INTERVAL '4 hours')
      ON CONFLICT DO NOTHING
    `);

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    pool.end();
  }
}

initializeDatabase();