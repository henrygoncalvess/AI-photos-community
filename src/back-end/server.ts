import 'dotenv/config'
import app from "./app";

app.listen({ port: 3000 }, () => {
    console.log('running...');
});