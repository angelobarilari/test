/**
 * Calcula o valor final da variável SOMA usando um loop.
 * @return {number} O valor final da variável SOMA após o processamento.
 */
export function calculateSum() {
    let INDICE = 13;
    let SOMA = 0;
    let K = 0;

    while (K < INDICE) {
        K = K + 1;
        SOMA = SOMA + K;
    }

    return SOMA;
}
