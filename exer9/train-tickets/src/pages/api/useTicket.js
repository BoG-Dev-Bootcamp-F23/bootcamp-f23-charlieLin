import deleteTicket from "../../../server/mongodb/actions/deleteTicket.js"

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
            await deleteTicket(req.query)
        } catch (e) {
            return res.status(500).send("Unable to use ticket")
        }
        return res.status(200).send("Successfully used ticket")
    }
}