/**
 * Verifica se um número pertence à sequência de Fibonacci.
 * @param {number} number O número a ser verificado.
 * @return {string} Mensagem indicando se o número pertence ou não à sequência.
 */
export function isFibonacci(number) {
    let a = 0;
    let b = 1;
    let next = 0;

    if (number === 0 || number === 1)
        return `O número ${number} pertence à sequência de Fibonacci.`;

    while (next < number) {
        next = a + b;
        a = b;
        b = next;
    }

    return next === number
        ? `O número ${number} pertence à sequência de Fibonacci.`
        : `O número ${number} NÃO pertence à sequência de Fibonacci.`;
}
