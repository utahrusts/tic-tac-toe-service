import { sql } from '@vercel/postgres';
 
export default async function handler(request, response) {
  try {
    response.setHeader('Access-Control-Allow-Credentials', true)
    response.setHeader('Access-Control-Allow-Origin', '*')
    // another common pattern
    // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    response.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
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