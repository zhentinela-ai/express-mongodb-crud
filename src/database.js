import { connect } from "mongoose";

(async () => {
  try {   
    // Nuevamente no funciona como lo expuesto en el tutorial, se pordría deber a la diferencia de versiones del NODE.JS
    const db = await connect("mongodb://127.0.0.1/crud-mongo");
    console.log("DB connected to ", db.connection.name);
  } catch (error) {
    console.log(error)
  }
})();
