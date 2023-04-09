import express from "express";
import usersRouter from "./routes/users.router.js";
import messagesRouter from "./routes/messages.router.js";
import viewsRouter from "./routes/views.router.js";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import mongoose from "mongoose";
 
const app = express();

app.use(express.json());

app.engine("handlebars", handlebars.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "handlebars");

app.listen(8080, () => {
    console.log("Listening on port 8080");
})

mongoose.connect(
    "mongodb+srv://josemariasosa:i1MADDwVlOZS2kt6@jmscluster0.gtmsfjl.mongodb.net/?retryWrites=true&w=majority"
)

app.use("/api/users", usersRouter);
app.use("/api/messages", messagesRouter);
app.use("/", viewsRouter);