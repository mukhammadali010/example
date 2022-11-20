const bigObj = {
    1: {
        class: "1-sinf",
        hours: ["8:30 / 9:15", "9:20 / 10:05", "10:10 / 10:55"],
        subject: ["Matematika", "Ona-tili", "O'qish"],
        teacher: ["Akbarov . A", "Salimov . S", "Qayumov . R",]
    },
    2: {
        class: "2-sinf",
        hours: ["8:30 / 9:15", "9:20 / 10:05", "10:10 / 10:55"],
        subject: ["Ingiliz tili", "Ona-tili", "Ta'sviriy san'at"],
        teacher: ["Akbarov . A", "Salimov . S", "Qayumov . R",]
    },
    3: {
        class: "3-sinf",
        hours: ["8:30 / 9:15", "9:20 / 10:05", "10:10 / 10:55"],
        subject: ["Tas'viriy san'at", "Ona-tili", "Matematika"],
        teacher: ["Akbarov . A", "Salimov . S", "Qayumov . R",]
    },
    4: {
        class: "4-sinf",
        hours: ["8:30 / 9:15", "9:20 / 10:05", "10:10 / 10:55"],
        subject: ["Jismoniy tarbiya", "Ona-tili", "Texnologiya"],
        teacher: ["Akbarov . A", "Salimov . S", "Qayumov . R",]
    },
    5: {
        class: "5-sinf",
        hours: ["8:30 / 9:15", "9:20 / 10:05", "10:10 / 10:55", "11:00 / 11:45"],
        subject: ["Tarix", "Ona-tili", "Tabiat"],
        teacher: ["Akbarov . A", "Salimov . S", "Qayumov . R",]
    },
    6: {
        class: "6-sinf",
        hours: ["8:30 / 9:15", "9:20 / 10:05", "10:10 / 10:55", "11:00 / 11:45"],
        subject: ["Tarix", "Ona-tili", "Tabiat"],
        teacher: ["Akbarov . A", "Salimov . S", "Qayumov . R",]
    },
    7: {
        class: "7-sinf",
        hours: ["8:30 / 9:15", "9:20 / 10:05", "10:10 / 10:55", "11:00 / 11:45"],
        subject: ["Tarix", "Ona-tili", "Tabiat"],
        teacher: ["Akbarov . A", "Salimov . S", "Qayumov . R",]
    },
    8: {
        class: "8-sinf",
        hours: ["8:30 / 9:15", "9:20 / 10:05", "10:10 / 10:55", "11:00 / 11:45"],
        subject: ["Tarix", "Ona-tili", "Tabiat"],
        teacher: ["Akbarov . A", "Salimov . S", "Qayumov . R",]
    },
    9: {
        class: "9-sinf",
        hours: ["8:30 / 9:15", "9:20 / 10:05", "10:10 / 10:55", "11:00 / 11:45"],
        subject: ["Tarix", "Ona-tili", "Tabiat"],
        teacher: ["Akbarov . A", "Salimov . S", "Qayumov . R",]
    },
}
const tables = document.getElementById("tables")
tables.style.fontSize = "26px"
const tbodyTables = tables.children[1]
function onLoad() {
    for (const bigKey in bigObj) {
        const row = document.createElement("tr");
        const idObj = bigObj[bigKey];
        row.innerHTML = `
            <tr>
            <th scope="row">${bigKey}}</th>
            <td>${idObj.class}</td>
            <td>${idObj.hours[0]} <br> ${idObj.hours[1]} <br> ${idObj.hours[2]}</td>
            <td>${idObj.subject[0]} <br> ${idObj.subject[1]} <br> ${idObj.subject[2]}</td>
            <td>${idObj.teacher[0]} <br> ${idObj.teacher[1]} <br>${idObj.teacher[2]}</td>
            <td><button onclick=${`deleting(${bigKey})`} class="btn"><i class="fa fa-trash fa-2x iconRedColor" id="trashIcon"></i></button></td>
          </tr>`
        tbodyTables.appendChild(row);
    }
}
function deleting(id) {
    delete bigObj[id]
    tbodyTables.innerHTML = ""
    onLoad()
}