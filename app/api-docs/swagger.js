process.env.NODE_ENV =
  process.env.NODE_ENV &&
  process.env.NODE_ENV.trim().toLowerCase() == "production"
    ? "production"
    : "development";

const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.3" });

console.log("process.env.NODE_ENV", process.env.NODE_ENV);

const options = {
  info: {
    title: "My Endpoint API",
    version: "1.0.0",
    description: "<h2>My Endpoint API 사용방법.</h2>",
  },
  servers: [
    {
      url:
        process.env.NODE_ENV === "development"
          ? ""
          : "https://stage-udev-poc-node-scratch.vercel.app",
      description: "My Endpoint API Documentation",
    },
  ],
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "album-resource",
      description: " (외부) Album API 그룹",
    },
    {
      name: "book-resource",
      description: "(파일) Book API 그룹",
    },
    {
      name: "post-resource",
      description: "Post API 그룹",
    },
    {
      name: "profile-resource",
      description: "Profile API 그룹",
    },
    {
      name: "user-resource",
      description: "User API 그룹",
    },
  ],
  securityDefinitions: {
    bearerAuth: {
      type: "http",
      scheme: "bearer",
      in: "header",
      bearerFormat: "JWT",
    },
    apiKeyAuth: {
      type: "apiKey",
      in: "header", // can be "header", "query" or "cookie"
      name: "X-API-KEY", // name of the header, query parameter or cookie
      description: "any description...",
    },
  },
  definitions: {
    // Parents: {
    //   father: "Simon Doe",
    //   mother: "Marie Doe",
    // },
    // User: {
    //   name: "Jhon Doe",
    //   age: 29,
    //   parents: {
    //     $ref: "#/definitions/Parents",
    //   },
    //   diplomas: [
    //     {
    //       school: "XYZ University",
    //       year: 2020,
    //       completed: true,
    //       internship: {
    //         hours: 290,
    //         location: "XYZ Company",
    //       },
    //     },
    //   ],
    // },
    // AddUser: {
    //   $name: "Jhon Doe",
    //   $age: 29,
    //   about: "",
    // },
  },
};

const outputFile = "./src/api-docs/swagger-output.json";
const endpointsFiles = ["./src/app.js"];
swaggerAutogen(outputFile, endpointsFiles, options);
