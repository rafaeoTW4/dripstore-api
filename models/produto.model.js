const { Sequelize, Model, DataTypes } = import('sequelize');
const { default: sequelize } = import(db/database.js)


const Produto = sequelize.define("Produto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  marca: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  categoria: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  estoque: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  imagem_url: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  data_criacao: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "produto", // Define explicitamente o nome da tabela
  timestamps: false // Se quiser usar os campos createdAt e updatedAt do Sequelize, mude para true
});

export default Produto;

