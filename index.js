const express = require("express");
const app = express();

const { connection } = require("./Config/db");
const { RegisterRoute } = require("./Routes/register.routes");

var cors = require('cors');
const { LoginRoute } = require("./Routes/login.routes");
const { TicketRoute } = require("./Routes/ticket.route");
const { BookmarkRoute } = require("./Routes/bookmark.route");

require("dotenv").config();
const PORT = process.env.PORT;

app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Masai Ticket System")
});

app.use("/register", RegisterRoute)

app.use("/login", LoginRoute)

app.use('/ticket', TicketRoute)

app.use('/bookmark', BookmarkRoute)


app.listen(PORT, async () => {
    try {
        await connection
        console.log("Connection is established");
    }
    catch (err) {
        console.log("Connection is not established");
        console.log(err)
    }
    console.log(`port is listening on ${PORT}`);
})