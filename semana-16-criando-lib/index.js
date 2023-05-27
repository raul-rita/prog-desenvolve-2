import fs from "fs"
import chalk from "chalk";

function trataErro (erro) {
    console.log(erro)
     throw new Error(chalk.red(erro.code, 'Não encontrou o arquivo'))
}

/* PROMISES COM .THEN .CATCH */

// function pegaArquivo(caminhoArquivo) {
//     const encoding = 'utf-8'

//     fs.promises.readFile(caminhoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro(erro))
// }

/* PROMISES COM ASYNC E AWAIT */

async function pegaArquivo(caminhoArquivo) {
    try {
        const encoding = 'utf-8'

        const texto = await fs.promises.readFile(caminhoArquivo, encoding)
    
        console.log(chalk.green(texto))
        
    } catch (erro) {
        trataErro(chalk.red(erro))
    }   
}

pegaArquivo('./arquivos/texto.md')
// pegaArquivo('./arquivos/textos.md')