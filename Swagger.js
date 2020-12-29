const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "REST API's Documentation",
      description:
        "This is an implementation of how to document your RESTful API's using Swagger",
      version: "0.1.0",
      contact: {
        name: "Monfort N. Brian",
        url: "monfortbrian.github.io",
        email: "monfortbrian@outlook.com",
      },
    },
    components: {
      schemas: {
        fruits: {
          properties: {
            name: {
              type: "string",
            },
          },
        },
      },
    },
    servers: [{ url: "http://localhost:3000/fruits" }],
  },
  apis: ["./routes/fruits.js"],
};

export default swaggerOptions;
