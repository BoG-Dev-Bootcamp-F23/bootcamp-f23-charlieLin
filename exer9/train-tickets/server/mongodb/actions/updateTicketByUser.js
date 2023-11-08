import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import mongoose from "mongoose";


export default async function updateTicketByUser(data) {
    try {
        await connectDB();
        const { ticketID, userID } = data;
        const uID = new mongoose.Types.ObjectId(userID);
        await Ticket.findByIdAndUpdate(ticketID, {userID : uID})
    } catch (e) {
        throw new Error("Unable to update ticket. Invalid data or database issue.")
    }
}