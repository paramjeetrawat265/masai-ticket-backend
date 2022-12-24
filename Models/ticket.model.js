const mongoose = require("mongoose");
const ticketSchema = mongoose.Schema({
    category: { type: String },
    title: { type: String },
    message: { type: String },
    user: { type: String },
}, {  timestamps: true  })
const TicketModel = mongoose.model("ticket", ticketSchema);

module.exports = {
    TicketModel
}