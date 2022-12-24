const { TicketModel } = require("../Models/ticket.model")

const PostTicketController = async (req, res) => {
    try {
        const data = await TicketModel(req.body)
        data.save();
        res.send({ msg: "Ticket Raised Successfully" })
    }
    catch (err) {
        res.send({ msg: "Ticket not raised" })
    }
}

const GetTicketController = async (req, res) => {
    console.log("ticket")
    const { email } = req.body;
    // const data = await TicketModel.find({ email: email });
    const data = await TicketModel.find();


    if (data) {
        res.send({ msg: 'data found', data: data })
    }
    else {
        res.send({ msg: "data not found" })
    }
}
module.exports = { GetTicketController, PostTicketController }