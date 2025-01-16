import { exec } from "child_process";

export function getPyResults(){
    exec('python3 src/services/test.py', (error, stdout, stderr) => {
        if (error) {
            console.error(`Erro ao executar o script Python: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Erro no script Python: ${stderr}`);
            return;
        }

        const resultado = JSON.parse(stdout);
        console.log("Resultado do Python:", resultado);
    });
}