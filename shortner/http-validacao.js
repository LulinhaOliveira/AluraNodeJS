import fetch from 'node-fetch';

function trataErros(erro){
    throw new Error(erro.message);
}

async function verificaStatus(arrayURLs){
    try{
        const arrayStatus = await Promise.all(arrayURLs.map(async url => {
            const response = await fetch(url);
            return response.status;
        })) 
        return arrayStatus;
    }catch(erro){      
        trataErros(erro);
    }

}

function geraArrayURLs(arrayLinks){
    return arrayLinks.map(value => Object.values(value).join());

}

export async function validaURLs(arrayLinks){
 
    const links = geraArrayURLs(arrayLinks);
    const statusLinks = await verificaStatus(links);
    const results = arrayLinks.map((objeto, index) => ({
      ...objeto, status : statusLinks[index]}))

    return results;
    };
