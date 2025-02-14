// Clase Pila
class Pila {
    constructor() {
        this.items = [];
    }

    // Método para apilar un elemento
    push(element) {
        this.items.push(element);
    }

    // Método para desapilar un elemento
    pop() {
        if (this.isEmpty()) {
            throw new Error("La pila está vacía");
        }
        return this.items.pop();
    }

    // Método para verificar si la pila está vacía
    isEmpty() {
        return this.items.length === 0;
    }

    // Método para obtener el elemento en la cima de la pila
    peek() {
        if (this.isEmpty()) {
            throw new Error("La pila está vacía");
        }
        return this.items[this.items.length - 1];
    }
}

// Función para evaluar una expresión postfija
function evaluarExpresionPostfija(expresion) {
    const pila = new Pila();
    const tokens = expresion.split(' ');

    tokens.forEach(token => {
        if (!isNaN(token)) {
            // Si el token es un operando, apilarlo
            pila.push(parseInt(token));
        } else {
            // Si el token es un operador, desapilar dos elementos y aplicar el operador
            const operando2 = pila.pop();
            const operando1 = pila.pop();
            let resultado;

            switch (token) {
                case '+':
                    resultado = operando1 + operando2;
                    break;
                case '-':
                    resultado = operando1 - operando2;
                    break;
                case '*':
                    resultado = operando1 * operando2;
                    break;
                case '/':
                    resultado = operando1 / operando2;
                    break;
                default:
                    throw new Error(`Operador desconocido: ${token}`);
            }

            // Apilar el resultado de la operación
            pila.push(resultado);
        }
    });

    // El resultado final es el único elemento en la pila
    return pila.pop();
}

// Ejemplo de uso
const expresion = "3 4 + 5 *";
const resultado = evaluarExpresionPostfija(expresion);
console.log(`El resultado de la expresión '${expresion}' es: ${resultado}`); // El resultado de la expresión '3 4 + 5 *' es: 35