export default async function handler(req, res) {
  const url = "https://pokeapi.co/api/v2/pokemon/";

  try {
    if (req.method === "POST") {
      const body = req.body;
      const pokemon1 = body.pokemon1;
      const pokemon2 = body.pokemon2;
      const response1 = await fetch(url + pokemon1);
      const response2 = await fetch(url + pokemon2);

      const data1 = await response1.json();
      const data2 = await response2.json();

      const base1Arr = data1.stats.map((x) => {
        return x.base_stat;
      });

      const base2Arr = data2.stats.map((x) => {
        return x.base_stat;
      });
      let base1 = 0;
      let base2 = 0;
      for (let i = 0; i < 6; i++) {
        base1 += base1Arr[i];
        base2 += base2Arr[i];
      }

      const winner =
        base1 > base2
          ? `${pokemon1} wins!`
          : base1 === base2
          ? "Its a tie!"
          : `${pokemon2} wins!`;

      res.status(200).json({ verdict: winner });
    }
  } catch (e) {
    res.status(400).json({ error: "Invalid Data!" });
  }
}
