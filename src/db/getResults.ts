import data from './data.json';

//получаем данные для заполнения таблицы из json-файла
export const getCalculationResults = () => {
    const dataCalculationResults = data.calculationResults;    
    return dataCalculationResults;
}