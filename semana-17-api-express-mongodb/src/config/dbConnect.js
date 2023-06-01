import mongoose from "mongoose";

mongoose.connect("mongodb+srv://raulrita:%40Ra400208480124@livraria.fpx2vbs.mongodb.net/cursos-alura");

let db = mongoose.connection;

export default db;