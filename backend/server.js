const app = require("./app");

// Uncaght Exception
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Sutting down the server due to Uncaght Exception`);
  process.exit(1);
});

// Config
require("dotenv").config({ path: "backend/config/config.env" });

// databade connection
require("./config/dbConnection");

const server = app.listen(process.env.PORT, () => {
  console.log(`Server in running on port ${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log(`Shutting down the server due to Unhandled Pormise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
