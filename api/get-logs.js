import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const gameLog = await sql`SELECT * FROM game_log;`;
    return response.status(200).json({ gameLog });
 
  
}