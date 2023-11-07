// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    const type = req.query.type;
    const url = "https://pokeapi.co/api/v2/type/";

    const response = await fetch(url + type);
    const data = await response.json();

    res.status(200).json({
      pokemon: data.pokemon.map((x) => {
        return x.pokemon.name;
      }),
    });
  } catch (e) {
    res.status(400).json({ error: "Invalid Data!" });
  }
}
