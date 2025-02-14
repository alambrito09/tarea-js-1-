class PilaLimitada {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.stack = [];
    }

    push(element) {
        if (this.stack.length >= this.maxSize) {
            console.error("Error: La pila está llena");
        } else {
            this.stack.push(element);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            console.error("Error: La pila está vacía");
            return null;
        } else {
            return this.stack.pop();
        }
    }

    peek() {
        if (this.stack.length === 0) {
            console.error("Error: La pila está vacía");
            return null;
        } else {
            return this.stack[this.stack.length - 1];
        }
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    isFull() {
        return this.stack.length >= this.maxSize;
    }

    size() {
        return this.stack.length;
    }
}

// Ejemplo de uso
let miPila = new PilaLimitada(3);

miPila.push("A");
miPila.push("B");
miPila.push("C");
miPila.push("D");   // "Error: La pila está llena"
console.log(miPila.size());  // 3