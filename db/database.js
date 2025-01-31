import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Carregar variáveis de ambiente

const sequelize = new Sequelize(
    "neondb", // Nome do banco
    "neondb_owner", // Usuário do banco
    "npg_wbvHK28xkrGi", // Senha do banco
    {
      host: "ep-ancient-violet-a8g9dm8l-pooler.eastus2.azure.neon.tech", // Host do Neon
      port: 5432, // Porta padrão do PostgreSQL
      dialect: "postgres", // Dialeto do banco
      logging: false, // Desativa logs SQL no console
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false, // Necessário para conexões seguras como no Neon.tech
        },
      },
    }
  );

// Teste de conexão
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco de dados com sucesso! ✅");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados:", error);
  }
};

testConnection();

export default sequelize;
