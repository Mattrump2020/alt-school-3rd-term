import express  from "express";
import initializeMongoDBConnection from "./database/mongoConnection.js";
import urlRouter from "./routes/urlRoutes.js";
import userRouter from "./routes/usersRoutes.js";
import qrRouter from "./routes/qrCodeRoutes.js";
import limiter from "./utils/limiter.js";
import dotenv from "dotenv";

const app = express()

dotenv.config();
initializeMongoDBConnection();

app.use(express.json());
app.use(express.urlencoded({
    extended:true}));
app.use(limiter);


app.use("/urlApi", urlRouter);
app.use("/urlApi/users", userRouter);
app.use("/urlApi/qrcode", qrRouter);


app.all("*", (req, res) => {
    res.status(404).jsonp({ message: "Page not found" });
});

app.get("/urlApi", (req, res) => {
    res.send("The Best UrlShortener");
});
  
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Sever is running on port ${PORT}...`)
} )