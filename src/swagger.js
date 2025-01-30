export default {
    openapi: "3.0.0",
    info: {
      title: "Minha API",
      version: "1.0.0",
      description: "Documentação da API usando Swagger",
    },
    paths: {
      "/api": {
        get: {
          summary: "Endpoint inicial",
          description: "Retorna uma mensagem de status da API",
          responses: {
            200: {
              description: "Sucesso",
              content: {
                "application/json": {
                  example: { mensagem: "API funcionando! 🚀" },
                },
              },
            },
          },
        },
      },
    },
  };
  