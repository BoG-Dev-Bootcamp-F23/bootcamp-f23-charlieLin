import createTicket from "../../../server/mongodb/actions/createTicket.js";
import mongoose from "mongoose";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const { lineColor, station, userID } = req.body
            const fixedUserId = new mongoose.Types.ObjectId(userID);
            await createTicket({lineColor, station, userID : fixedUserId});
        } catch (e) {
            return res.status(500).send("Unable to buy ticket.")
        }
        return res.status(200).send("Successfully bought ticket.")
    }
}