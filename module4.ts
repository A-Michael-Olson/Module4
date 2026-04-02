// ==============================
// Variables with Data Types
// ==============================

let maxCount: number = 10;
let sequenceName: string = "Fibonacci Generator";


// ==============================
// Function with Data Types
// Iterative Fibonacci
// ==============================

function generateFibonacci(n: number): number[] {
    if (n < 0) {
        throw new Error("Input must be non-negative");
    }

    const result: number[] = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) result.push(0);
        else if (i === 1) result.push(1);
        else result.push(result[i - 1] + result[i - 2]);
    }

    return result;
}


// ==============================
// Recursive Fibonacci Function
// ==============================

function fibonacciRecursive(n: number): number {
    if (n < 0) {
        throw new Error("Input must be non-negative");
    }

    if (n <= 1) return n;

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}


// ==============================
// Tuple Example
// Returning value + index
// ==============================

function getFibWithIndex(index: number): [number, number] {
    const value = fibonacciRecursive(index);
    return [index, value];
}


// ==============================
// Class Example
// ==============================

class FibonacciCalculator {
    private sequence: number[];

    constructor() {
        this.sequence = [];
    }

    generate(n: number): number[] {
        this.sequence = generateFibonacci(n);
        return this.sequence;
    }

    getSequence(): number[] {
        return this.sequence;
    }

    getValueAt(index: number): number {
        if (index < 0 || index >= this.sequence.length) {
            throw new Error("Index out of bounds");
        }
        return this.sequence[index];
    }
}


// ==============================
// Exception Handling (Stretch Goal)
// ==============================

function safeGenerate(n: number): number[] {
    try {
        return generateFibonacci(n);
    } catch (error) {
        console.error("Error generating Fibonacci:", (error as Error).message);
        return [];
    }
}


// ==============================
// MAIN 
// ==============================

console.log(`=== ${sequenceName} ===`);

const fibArray: number[] = safeGenerate(maxCount);
console.log("Iterative:", fibArray);

// Recursive example
const fibValue: number = fibonacciRecursive(6);
console.log("Recursive (n=6):", fibValue);

// Tuple usage
const tupleResult: [number, number] = getFibWithIndex(7);
console.log(`Tuple (index, value):`, tupleResult);

// Class usage
const calculator = new FibonacciCalculator();
calculator.generate(8);

console.log("Class Sequence:", calculator.getSequence());
console.log("Value at index 5:", calculator.getValueAt(5));
