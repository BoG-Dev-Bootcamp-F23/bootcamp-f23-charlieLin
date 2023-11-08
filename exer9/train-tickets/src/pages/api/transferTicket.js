import updateTicketByUser from "../../../server/mongodb/actions/updateTicketByUser";

export default async function transferTicket(req, res) {
    if (req.method === 'PATCH') {
        try {
            await updateTicketByUser(req.body);
            return res.status(200).send("Successfully transfered ticket")
        } catch(e) {
            return res.status(500).send("Failed to transfer ticket")
        }
        
    }
}