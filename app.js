//1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, 
//al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos, 
//si un dato ya está almacenado entonces la lista no cambia.

console.log('Ejercicio 3.1');

class Nodo { 
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null; 
    }
}

class ListaEnlazada {
    constructor(){
        this.inicio = null;
        this.final = null;
    }

    // Metodo para verificar sinun valor ya existe en la lista
    duplicado(valor){
        let aux = this.inicio;
        while (aux != null){
            if (aux.valor === valor){
                return true;
            }
            aux = aux.siguiente;
        }
        return false;
    }

    // Método para insertar un nuevo nodo al final de la lista sin duplicados
    insertarValor(valor) {
        if (this.duplicado(valor)){
            console.log(`El valor ${valor} ya existe, no se duplicará.`);
            return;
        }

        let nuevoNodo = new Nodo(valor);

        if (this.inicio == null) {
            this.inicio = nuevoNodo;
            this.final = nuevoNodo;
        } else {
            this.final.siguiente = nuevoNodo;
            this.final = nuevoNodo;
        }
    }

    mostrar() {
        if (this.inicio == null) {
            console.log('Lista enlazada vacia.');
            return;
        }

        let aux = this.inicio;
        let resultado = '';
        while (aux != null) {
            resultado += aux.valor + ' -> ';
            aux = aux.siguiente;
        }
        resultado += 'null';
        console.log(resultado);
    
    }
}

let lista = new ListaEnlazada();
lista.insertarValor(10);
lista.insertarValor(20);
lista.insertarValor(30);
console.log('Lista actual:');
lista.mostrar();

console.log('Insertar valor 20:')
lista.insertarValor(20);
console.log('Lista actualizada:')
lista.mostrar();

console.log('Insertar valor 40:')
lista.insertarValor(40);
console.log('Lista actualizada:')
lista.mostrar();


//2.- Escribir un programa para formar una lista que realice las siguientes tareas:
// Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
// Mostrar todos los Nodos que superen un valor determinado.

console.log('Ejercicio 3.2');

class Node{
    constructor(valor){
        this.valor = valor;
        this.siguiente = null;
    }
}

class LinkedList{
    constructor(){
        this.inicio = null;
        this.final = null;
    }

    insertar(valor){
        let nuevoNodo = new Nodo(valor);

        if (this.inicio == null) {
            this.inicio = nuevoNodo;
            this.final = nuevoNodo;
        } else {
            this.final.siguiente = nuevoNodo;
            this.final = nuevoNodo;
        }
    }

    valorMayor(valorUmbral){
        let aux = this.inicio;
        let resultados = [];

        while (aux){
            if(aux.valor > valorUmbral){
                resultados.push(aux.valor);
            }
            aux = aux.siguiente;
        }

        return resultados;
    }

    // Método para convertir la lista enlazada en un arreglo
  toArray() {
    let aux = this.inicio;
    let array = [];

    while (aux) {
      array.push(aux.valor);
      aux = aux.siguiente;
    }

    return array;
  }
}

// Función para generar un número entero positivo aleatorio
function numeroAleatorio(max){
    return Math.floor(Math.random() * max) + 1;
}
    
    

let list = new LinkedList();

let numeroDeElementos = 10; 
let valorMax = 100; //Maximo valor para los numeros aleatorios

for (let i = 0; i < numeroDeElementos; i++){
    list.insertar(numeroAleatorio(valorMax));
}

console.log('Total de elementos en la lista:', list.toArray());

let valorUmbral = 50; // Mostrar los nodos con valor mayor a 50
console.log('Numeros en la lista mayores que', valorUmbral, ":", list.valorMayor(valorUmbral));

