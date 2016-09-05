import express from "express";
import templating from "consolidate";
import bodyParser from "body-parser";

import indexrouter from './../controllers/index';



const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.engine("twig", templating.twig);


app.set("view engine", "twig");
app.set("views", __dirname + "/../client/views");


/*  Routes */
app.get("/", indexrouter.index);
app.post("/", indexrouter.postquery);




app.listen(3000, () => console.log("server run port 3000"));