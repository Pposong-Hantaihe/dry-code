const parseFile = (output) => {
    return output.split("ā");
};

const parseChart = (output) => {
    return output.split("ā\n");
};

const parseFormats  = (result) => {
    const chart = result.split("ā");
    let elements = [];
    for (let i = 0; i < chart.length; i++){
        if(chart[i++].includes("\nā")) {
            elements.push(chart.slice(i, i+7).map((value) => { 
                return value.trim(); 
            }));
        }
    }
    return elements;
};

module.exports = { parseFile, parseChart, parseFormats };