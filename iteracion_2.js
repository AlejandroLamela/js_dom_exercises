// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const div$$ = document.createElement('div');
document.body.appendChild(div$$);
// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divP$$ = document.createElement('div');
const p$$ = document.createElement('p');
document.body.appendChild(divP$$);
divP$$.appendChild(p$$);
// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divWith6p$$ = document.createElement('div');
document.body.appendChild(divWith6p$$);

for (let index = 0; index < 6; index++) {
    const six_P$$ = document.createElement('p');
    divWith6p$$.appendChild(six_P$$);
    
}
// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const pText$$ = document.createElement('p');
pText$$.textContent='soy dinámico!';
document.body.appendChild(pText$$);
// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2$$ = document.querySelector('.fn-insert-here');
h2$$.textContent='Wubba Lubba dub dub';

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul$$ = document.createElement('ul');
document.body.appendChild(ul$$);

for (const app of apps) {
    const li$$ = document.createElement('li');
    li$$.textContent=app;
    ul$$.appendChild(li$$);

}
// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const classFnRemoveMe$$ = document.querySelectorAll('.fn-remove-me');
for (const element of classFnRemoveMe$$) {
    element.remove();
}
// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const divTwo$$ = document.querySelectorAll('div');
const pDiv$$ = document.createElement('p');
pDiv$$.textContent = 'Voy en medio!';
document.body.insertBefore(pDiv$$,divTwo$$[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divFn$$ = document.querySelectorAll('.fn-insert-here');
for (const element of divFn$$) {
  const pFn$$ = document.createElement('p');  
  pFn$$.textContent='Voy dentro!';
  element.appendChild(pFn$$);
}


