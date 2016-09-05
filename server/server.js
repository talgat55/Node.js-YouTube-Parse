import express from "express";
import templating from "consolidate";
import bodyParser from "body-parser";
import config from './../config/config.json';
import indexrouter from './../controllers/index';



let rightpath = path.parse(__dirname);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.engine("twig", templating.twig);


app.set("view engine", "twig");
app.set("views", __dirname + "/../client/views");


/*  Routes */
app.get("/", indexrouter.index);




app.listen(3000, () => console.log("server run port 3000"));