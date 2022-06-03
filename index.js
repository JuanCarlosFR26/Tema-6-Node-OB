let compra = ["Huevos", "Leche", "Harina", "Azúcar", "Vainilla"];
let compraAdd = compra.push("Aceite de Girasol");
let compraDel = compra.pop("Aceite de Girasol");
let peliculas = [{titulo: "Pesadilla antes de Navidad", autor: "Tim Burton", year: 1993}, 
                 {titulo: "Big Fish", autor: "Tim Burton", year: 2003},
                 {titulo: "Endgame", autor: "Anthony Russo", year: 2019}];
let peliculasFil = peliculas.filter(pelicula => pelicula.year > 2010);

let peliculasDirectores = peliculas.map( pelicula => pelicula.autor);
let peliculasTitulo = peliculas.map( pelicula => pelicula.titulo);

let peliculasConcat = peliculasDirectores.concat(peliculasTitulo)
let peliculasSpread = [...peliculasDirectores, ...peliculasTitulo]

console.log(peliculasConcat)