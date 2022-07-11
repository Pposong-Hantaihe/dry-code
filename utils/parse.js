const parseJscpd = (output) => {
    return output.split("┌────────────┬────────────────┬─────────────┬──────────────┬──────────────┬──────────────────┬───────────────────┐\n");
};

const parseChart = (result) => {
    console.log(result);
    const chart = result.split("│");
    console.log(chart);
    let elements = [];
    for (let i = 0; i < chart.length; i++){
        if(chart[i++] === "\n├────────────┼────────────────┼─────────────┼──────────────┼──────────────┼──────────────────┼───────────────────┤\n") {
            elements.push(chart.slice(i, i+7).map((value) => { 
                return value.trim(); 
            }));
        }
    }
    console.log("=========elements==========");
    console.log(elements);
    return elements;
};

module.exports = { parseJscpd, parseChart };
