
import { getFile } from '../index.js';

const arrayResult = [
    {
        FileList : 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
];

describe('pegaArquvio::', ()=>{
    it('deve ser uma funcao', ()=>{
        expect(typeof getFile).toBe('function');
    })
    it('deve retornar um array com resultados', async () =>{
        const resultado = await getFile('C:/Users/luiza/Documents/AluraNodeJS/shortner/test/arquivosTest/arquivoTeste1.txt');
        expect(resultado).toEqual(arrayResult);
    })
    it('deve retornar "não é link"', async()=>{
        const resultado = await getFile('C:/Users/luiza/Documents/AluraNodeJS/shortner/test/arquivosTest/arquivoTeste1Vazio.txt');
        expect(resultado).toBe('Não Há Links');
    })
})

