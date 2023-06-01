import express from "express";
import LivroController from "../controller/livrosController.js";

const router = express.Router()

router
    .get('/livros', LivroController.pegaTodosLivros)
    .get('/livros/busca', LivroController.listarLivroPorEditora) //colocar o endpoint mais especifico em primeiro porque da erro se fizer ao contrário , o postman entendendo que os parametros passados depois de busca são um ID.
    .get('/livros/:id', LivroController.pegaLivroPorId)

    .post('/livros', LivroController.cadastrarLivro)

    .put('/livros/:id', LivroController.atualizarLivro)

    .delete('/livros/:id', LivroController.excluirLivro)


export default router;