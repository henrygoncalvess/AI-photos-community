import { MongoClient, ServerApiVersion } from 'mongodb'

export const client = new MongoClient(String(process.env.URI_MONGO), {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
})

async function run() {
    try{
        await client.connect();
        console.log("conectado ao MongoDB Atlas com sucesso");
    
    } catch (erro){
        console.error('falha na conexão com o banco: ', erro)
        await client.close();
    }
}

run()