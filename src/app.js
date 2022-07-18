// Gracias a babel, se puede importar como se hadría en JavaScrip, al pesar que se trabaja con NODE
// Es decir, lo siguiente
// express = require('express');
// es equivalente a lo que hay debajo, con la diferencia que es la forma de importar desde NODE
import express from "express";
import { create } from "express-handlebars";
import indexRoutes from "./routes/index.routes";
import path from "path";
import morgan from 'morgan'

const app = express();

app.set("views", path.join(__dirname, "views"));

// Error con la forma de Fazt
const exphbs = create({
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    defaultLayout: "main",
    extname: ".hbs",
});

app.engine(".hbs", exphbs.engine);

app.set("view engine", ".hbs");

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(indexRoutes);

export default app;
