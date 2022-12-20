// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const showMe$$ = document.querySelector(".showme");
console.log(showMe$$);
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const h1_pillado$$ = document.querySelector("#pillado");
console.log(h1_pillado$$);
// 1.3 Usa querySelector para mostrar por consola todos los p
const p_all$$ = document.querySelectorAll("p");
console.log(p_all$$);
// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemos$$ = document.querySelectorAll('.pokemon');
console.log(pokemos$$);
// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
// data-function="testMe"
const testMe$$ = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe$$);
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
// data-function="testMe"

const characterRick$$ = document.querySelectorAll('[data-function="testMe"]');
console.log(characterRick$$[2]);
