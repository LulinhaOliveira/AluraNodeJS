import chalk from 'chalk'; //biblioteca de cores
import fs from 'fs'; //arquivos


async function getFile(path){
    const encoding = 'utf-8';  
    try{
        const text = await fs.promises.readFile(path,encoding);
        console.log(chalk.blue(text));
    }catch(err){
        console.log(chalk.red(err.code, "Erro Encontrado"));
    }
}


getFile("arquivoTeste.txt");

console.log(chalk.red("Hellow"));