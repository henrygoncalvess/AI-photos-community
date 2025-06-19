const { exec } = require("node:child_process");

function checkMongoDB() {
  exec(
    "docker exec mongodb-dev mongosh --eval \"db.adminCommand('ping')\"",
    handleReturn,
  );

  function handleReturn(error, stdout, stderr) {
    if (stdout.search("{ ok: 1 }") === -1) {
      process.stdout.write(".");
      checkMongoDB();
      return;
    }

    console.log("\n🟢 MongoDB está pronto e aceitando conexões\n\n");
  }
}

process.stdout.write("\n\n🔴 Aguardando MongoDB aceitar conexões");
checkMongoDB();
