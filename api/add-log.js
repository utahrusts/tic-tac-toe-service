import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {

    const { symbol1, symbol2, rounds } = request.body;
    if(!symbol1 && !symbol2 && ! rounds){
        return response.status(400).json({error: "You must provide all column values(symbo1,symbol2,rounds)"})
    }
   
    const result = await sql`INSERT INTO game_log (symbol1, symbol2, rounds, start_time, end_time) VALUES (${symbol1}, ${symbol2},${rounds},CURRENT_TIMESTAMP,NULL);`;
    return response.status(200).json({result});
  } catch (error) {
    return response.status(500).json({ error });
  }
 

}