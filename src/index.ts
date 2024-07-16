/** Libs */
import express, { Application } from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";

/** Configs */
import swaggerDocs from "./config/swaggerConfig";
import sequelize from "./models";

/** Routes */
import registrationRoutes from "./routes/registrationRoutes";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use("/persons", registrationRoutes);

/**
 * Synchronizes the database and starts the server.
 */
sequelize.sync({ force: true }).then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});
