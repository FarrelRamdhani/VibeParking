# Vibe Parking System - Database Setup

## Prerequisites

1. Install PostgreSQL on your system
2. Create a database named `vibe_parking`

## Database Setup

1. Create a PostgreSQL database:
   ```sql
   CREATE DATABASE vibe_parking;
   ```

2. Update the `.env.local` file with your database credentials if different from defaults

3. Run the initialization script:
   ```bash
   node init-db.js
   ```

## Default Credentials

The system comes with sample data:
- 3 parking lots: Main Lot A, Main Lot B, VIP Lot
- 4 sample vehicles parked in different lots

## Next Steps

1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Open http://localhost:3000 to view the application

## Features Implemented

- Homepage with centered Vibe Parking logo
- Dashboard with parking space statistics
- Vehicles management page
- Professional, enterprise-grade styling
- PostgreSQL database integration
- Responsive design