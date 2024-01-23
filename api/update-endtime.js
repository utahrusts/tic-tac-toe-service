import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    response.setHeader('Access-Control-Allow-Origin', '*')
    const gameId = request.query.gameId
    if(!gameId){
        return response.status(400).json({error: "You must provide a gameId"})
    }
    const result = await sql`UPDATE game_log set end_time =CURRENT_TIMESTAMP where game_id = ${gameId}`;
    return response.status(200).json({result});
  } catch (error) {
    return response.status(500).json({ error });
  }
 
}