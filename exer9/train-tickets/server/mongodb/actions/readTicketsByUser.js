import connectDB from "../index.js";
import Ticket from "../models/Ticket.js";
import mongoose from "mongoose";


export default async function readTicketsByUser(data) {
    try {
        await connectDB();
        const { identifier } = data;
        const id = new mongoose.Types.ObjectId(identifier)
        return await Ticket.find({userID : id});
    } catch (e) {
        throw new Error("Cannot load tickets")
    }
}