import fs from 'fs'; //arquivos;


function extractLink(text){
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const results =[];
    let aux;

    while((aux = regex.exec(text)) !== null){
        results.push({[aux[1]]: aux[2]})
    }
    return results.length === 0 ?'Não Há Links': results;
}


export async function getFile(path){
    const encoding = 'utf-8';  
    try{
        const text = await fs.promises.readFile(path,encoding);
        return extractLink(text);
    }catch(err){
        console.log(err.code, "Erro Encontrado");
    }
}

