import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";

export default async function lookUpTickets(req, res) {
    if (req.method === "GET") {
        try {
            const response = await readTicketsByUser(req.query)
            return res.status(200).json(response)
        } catch (e) {
            return res.status(500).send("Unable to lookup tickets for the user.")
        }
    }
}