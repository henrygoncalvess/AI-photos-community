import dotenv from "dotenv";

dotenv.config({
  path: ".env.development",
});

import app from "app";

const port = process.env.PORT || 3000;

app.listen({ port: port, host: "0.0.0.0" }, () => {
  console.log(`running on port: ${port}`);
});
