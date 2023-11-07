export default async function handler(req, res) {
    try {
        const name = req.query.name;
    
        const url = "https://pokeapi.co/api/v2/pokemon-species/";
    
        const nameResponse = await fetch(url + name);
        const nameData = await nameResponse.json();
    
    
        const evoChainURL = nameData.evolution_chain.url;
    
        const response = await fetch(evoChainURL);
        const data = await response.json();
        const chain = data.chain;
        console.log()
        const evo0 = chain.evolves_to.length === 1 ? chain.evolves_to[0].species.name : null;
        const evo1 = evo0 !== null && chain.evolves_to[0].evolves_to.length === 1 ?  chain.evolves_to[0].evolves_to[0].species.name : evo0;
    
        const evoMap = {};
        evoMap[chain.species.name] = evo0 === null ? name : evo0
        evoMap[evo0] = evo1;
        evoMap[evo1] = evo1;
    
        res.status(200).json({"next-evolution" : evoMap[name]})
    } catch(e) {
        res.status(400).json({error : "Invalid Data!"})
    }
   

    
}