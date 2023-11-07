export default async function handler(req, res) {
  try {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const id = Math.floor(Math.random() * 1017) + 1;
    const response = await fetch(url + id);
    const data = await response.json();

    if (data === null) {
        res.status(500).json({error : "Response recieved, but there is no data! Check API!"})
    }

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
    res.status(400).json({ error: "Invalid Data!" });
  }
}
