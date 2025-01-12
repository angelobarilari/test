import fs from "fs";

/**
 * Analisa o faturamento diário de uma distribuidora.
 * @param {string} filePath Caminho para o arquivo JSON contendo os dados de faturamento diário.
 * @return {Object} Um objeto contendo:
 *  - O menor valor de faturamento ocorrido em um dia do mês.
 *  - O maior valor de faturamento ocorrido em um dia do mês.
 *  - O número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
 */
export function analyzeRevenue(filePath = "./dados.json") {
    try {
        const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

        const validRevenues = data.filter((item) => item.valor > 0);

        const total = validRevenues.reduce((sum, item) => sum + item.valor, 0);
        const average = total / validRevenues.length;

        const minRevenue = Math.min(...validRevenues.map((item) => item.valor));
        const maxRevenue = Math.max(...validRevenues.map((item) => item.valor));

        const daysAboveAverage = validRevenues.filter(
            (item) => item.valor > average
        ).length;

        return {
            minRevenue,
            maxRevenue,
            daysAboveAverage,
        };
    } catch (error) {
        return null;
    }
}
