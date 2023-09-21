const table = document.querySelector('#table');
for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr')
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td')
        let num = i * 6 + j + 1
        cell.innerHTML = `${num}`
        cell.id = `${num}`
        row.appendChild(cell);
    }
    table.appendChild(row);
}

cell = document.getElementById("10")
cell.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
})
cell.addEventListener("click", (event) => {
    event.target.style.backgroundColor = `${document.getElementById("chosen-color").value}`
})

document.addEventListener('dblclick', function (event) {
    const clicked = event.target;
    if (clicked.tagName === "TD") {
        let column_temp = (clicked.id) % 6 === 0 ? 6 : (clicked.id) % 6
        let paintList = []
        while (column_temp <= 6) {
            paintList.push(column_temp)
            column_temp += 2
        }
        const column = (clicked.id) % 6 === 0 ? 6 : (clicked.id) % 6
        for (let i = 0; i < paintList.length; i++) {
            paintList[i] = Number((clicked.id)) + (paintList[i] - column)
        }
        for (let i = 0; i < paintList.length; i++) {
            let paint = document.getElementById(`${paintList[i]}`)
            paint.style.backgroundColor = `${document.getElementById("chosen-color").value}`
        }
    }
});