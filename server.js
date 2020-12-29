import connectDB from "./config/config.js";
import dotenv from "dotenv";
import express from "express";
import swaggerOptions from "./Swagger.js";
import fruitRoutes from "./routes/fruits.js";

dotenv.config();
connectDB();

const app = express();
app.get("/", (req, res) => {
  res.send("API irakora neza....");
});
import bodyParser from "body-parser";

import swaggerJsonDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const swaggerDocs = swaggerJsonDoc(swaggerOptions);
app.use(
  "/api-docs",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs, { explorer: true })
);

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use("/api", fruitRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(
    `Server iri muri mode ${process.env.NODE_ENV} kuri port ${process.env.PORT}`
      .yellow.bold
  );
});
