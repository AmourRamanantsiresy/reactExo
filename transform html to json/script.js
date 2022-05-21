const fs = require("fs");

let dataf = [];
let count = 0;
fs.readFile("data.txt", "utf-8", (err, data) => {
    let array = data.split('<tr>')
    for (i of array) {
        let temp = { nom: "", position: "", office: "", age: "", start_date: "", salary: "" };
        let g = i.split("</td>");
        temp.nom = g[0].slice(6, g[0].length)
        temp.position = g[1].slice(6, g[1].length)
        temp.office = g[2].slice(6, g[2].length)
        temp.age = g[3].slice(6, g[3].length)
        temp.start_date = g[4].slice(6, g[4].length)
        temp.salary = g[5].slice(6, g[5].length)
        dataf.push(temp);
    }
    fs.writeFile('result.json', JSON.stringify(dataf), () => { console.log("succes"); })
})

