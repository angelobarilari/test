/**
 * Inverte os caracteres de uma string fornecida.
 * @param {string} input A string a ser invertida.
 * @return {string} A string com os caracteres invertidos.
 */
export function reverseString(input) {
    let reversed = "";

    for (let i = input.length - 1; i >= 0; i--) reversed += input[i];

    return reversed;
}
