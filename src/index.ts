import "@types/express";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import clientRoutes from "./routes/clientRoutes"; // ajuste se estiver em outro lugar

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json()); // ← necessário para ler o req.body

// Rotas
app.use(clientRoutes);



// Inicializa o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
