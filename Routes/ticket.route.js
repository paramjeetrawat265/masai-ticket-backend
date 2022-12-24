const { Router } = require("express");
const { PostTicketController, GetTicketController } = require("../Controllers/ticket.controller");

const TicketRoute = Router();
TicketRoute.post("/", PostTicketController)
TicketRoute.get("/", GetTicketController)

module.exports = { TicketRoute }