export default async function handler(req, res) {
  try {
    const name = req.query.name;
    const url = "https://pokeapi.co/api/v2/pokemon/";

    const reponse = await fetch(url + name.toString());
    const data = await reponse.json();

    const types = data.types.map((x) => {
      return x.type.name;
    });

    res
      .status(200)
      .json({
        name: data.name,
        sprite: data.sprites.front_default,
        types: types,
      });
  } catch (e) {
    res.status(400).json({ error: "Invalid Data" });
  }
}
