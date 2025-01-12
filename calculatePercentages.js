

/**
 * Calcula o percentual de representação por estado no faturamento total.
 * @param {Object} revenues Objeto com os faturamentos por estado.
 * @return {Object} Objeto com os percentuais por estado.
 */
export function calculateStatePercentages(revenues) {
    const total = Object.values(revenues).reduce(
        (sum, value) => sum + value,
        0
    );

    const percentages = {};

    for (const state in revenues)
        percentages[state] = ((revenues[state] / total) * 100).toFixed(2) + "%";

    return percentages;
}
