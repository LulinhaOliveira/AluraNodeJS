import chalk from 'chalk'; //biblioteca de cores
import fs from 'fs'; //arquivos

const texto ="São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList)que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)";

function extractLink(text){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const results =[];
    let aux;

    while((aux = regex.exec(text)) !== null){
        results.push({[aux[1]]: aux[2]})
    }
    return results;
}


export async function getFile(path){
    const encoding = 'utf-8';  
    try{
        const text = await fs.promises.readFile(path,encoding);
        console.log(extractLink(text));
    }catch(err){
        console.log(chalk.red(err.code, "Erro Encontrado"));
    }
}


//getFile("arquivoTeste.txt");

