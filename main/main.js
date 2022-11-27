const pizzas = [
    {
        nombre: "Grande de Muzza",
        ingredientes: ["Muzzarela", "oregano", "Salsa de tomate"],
        id: 1,
        precio: 580
    } ,

    {
        nombre: " Especial de Anana",
        ingredientes: ["Muzzarela", "oregano", "Salsa de tomate", "Anana"],
        id: 2,
        precio: 900
    },

    {
        nombre: "Napolitana",
        ingredientes: ["Muzzarela", "oregano", "Salsa de tomate", "Rodajas de tomate"],
        id: 3,
        precio: 900
    } ,

    {
        nombre: "Fugazzeta",
        ingredientes: ["Muzzarela", "oregano", "Cebolla"],
        id: 4,
        precio: 1000
    },
    
    {
        nombre: "Mataintestinos",
        ingredientes: ["Muzzarela", "oregano", "Salsa de tomate", "Bacon", "Cebolla"],
        id: 5,
        precio: 1250 
    } ,

    {
        nombre: "La de la casa",
        ingredientes: ["Muzzarela", "oregano", "Salsa de tomate", "Jamon", "Morron"],
        id: 6,
        precio: 1200 
    }

];

// imprime en consola los elementos del array de objetos con id impar

impar = () => {
    for (let i = 0; i <= 5; i++) {
        if(pizzas[i].id % 2 != 0) {
            console.log(`${pizzas[i].nombre} contiene un id impar, que es ${pizzas[i].id}.`);
        } else {
            continue;
        }
    };

}

// imprime por consola los elementos del array que tengan como valor de la propiedad "precio" menos de 600

ratatuil = () => {
    for (let i = 0; i <= 5; i++) {
        if (pizzas[i].precio < 600) {
            console.log(`${pizzas[i].nombre} tiene un precio de menos de $600, que sería $${pizzas[i].precio}.`)
        } else {
            continue;
        }
    }
};

// imprime por consola los precios de cada elemento del array 

precios = () => {
    for (let i = 0; i <= 5; i++) {
     console.log(`${pizzas[i].nombre} tiene un precio de $${pizzas[i].precio}.`)
    }
};

// imprime por consola los ingredientes de cada elemento del array, separandolos por comas

ingredientes = () => {
    for (let i = 0; i <= 5; i++) {
        console.log(`Ingredientes de ${pizzas[i].nombre}:`)
        console.log(pizzas[i].ingredientes.join());
        }
};

