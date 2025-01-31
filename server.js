import express from "express";
import dotenv from "dotenv";
import sequelize from "./db/database.js"
//import swaggerUi from "swagger-ui-express";
//import swaggerDocument from "./swagger.js";
//import routes from "./routes.js";


dotenv.config(); // Carrega variáveis de ambiente

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para JSON
//app.use("/api", routes); // Usa as rotas definidas
//app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
// Swagger


app.get('/', (req, res) => {
    res.send('hello world')
  })

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

