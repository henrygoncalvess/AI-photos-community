import "dotenv/config";
import app from "./app";

app.listen({ port: 3000 }, () => {
  console.log("running on http://localhost:3000");
});
