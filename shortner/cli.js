import { validaURLs } from './http-validacao.js';
import { getFile } from './index.js';


const path = process.argv;

async function processText(pathFile){
    const result = await getFile(path[2]);
    if(pathFile[3] === 'validar'){
       console.log('Dados Validados', await validaURLs(result));
    }else{
       console.log('lista de links', result);
    }

}

processText(path);