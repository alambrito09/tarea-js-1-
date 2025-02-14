class UndoManager {
    constructor() {
        this.stack = [];
    }

    addAction(action) {
        this.stack.push(action);
    }

    undo() {
        return this.stack.pop();
    }

    getHistory() {
        return this.stack.slice();
    }
}

// Simulación de uso
const manager = new UndoManager();

manager.addAction("Escribir 'Hola'");
manager.addAction("Escribir 'Mundo'");
console.log(manager.getHistory()); // ["Escribir 'Hola'", "Escribir 'Mundo'"]

manager.undo();
console.log(manager.getHistory()); // ["Escribir 'Hola'"]