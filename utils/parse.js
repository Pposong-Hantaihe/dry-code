const parseFile = (output) => {
    return output.split("┌");
};

const parseChart = (output) => {
    return output.split("┐\n");
};

const parseFormats  = (result) => {
    const chart = result.split("│");
    let elements = [];
    for (let i = 0; i < chart.length; i++){
        if(chart[i++].includes("\n├")) {
            elements.push(chart.slice(i, i+7).map((value) => { 
                return value.trim(); 
            }));
        }
    }
    return elements;
};

module.exports = { parseFile, parseChart, parseFormats };