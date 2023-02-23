/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/object-curly-spacing */
export function Calculator(a, b) {
    const sum = a + b;
    const substract = a - b;
    const multiply = a * b;
    const divide = a / b;
    return { sum, substract, multiply, divide };
}
