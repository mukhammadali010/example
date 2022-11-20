students = [
    {
        firstName: "Akbarjon",
        lastName: "Xoliqov",
        class: "7-'A'",
        phone: "+998 99 142 12 41"
    },
    {
        firstName: "Solijon",
        lastName: "Salimov",
        class: "7-'D'",
        phone: "+998 99 133 12 41"
    },
    {
        firstName: "Sarvarjon",
        lastName: "Komilov",
        class: "5-'A'",
        phone: "+998 99 142 33 41"
    },
    {
        firstName: "Davlatbek",
        lastName: "Qayumov",
        class: "7-'D'",
        phone: "+998 99 542 12 31"
    },
    {
        firstName: "Nodirjon",
        lastName: "Mosayev",
        class: "4-'A'",
        phone: "+998 99 642 12 41"
    },
    {
        firstName: "Karimjon",
        lastName: "Zohidov",
        class: "9-'B'",
        phone: "+998 99 142 62 41"
    },
];


const tables = document.getElementById("tables");
tables.style.fontSize = "26px"
const tbodyTables = tables.children[1];


function onLoad(filters = {}) {

     // tozalash
     tbodyTables.innerHTML = "";

     const data = students.filter((t , )=> 
    
     t.firstName.includes(filters.firstName || "")
     );
 


    data.map((s, i) => {

        const row = document.createElement("tr");

        row.innerHTML = `
    <tr>
    <th scope="row">${i + 1}</th>
    <td>${s.firstName}</td>
    <td>${s.lastName}</td>
    <td>${s.class}</td>
    <td>${s.phone}</td>
    <td><button onclick=${`deleting(${i})`} class="btn"><i class="fa fa-trash fa-2x iconRedColor" id="trashIcon"></i></button></td>
  </tr>
    `
        tbodyTables.appendChild(row);
    })
}


function deleting(i) {
    const trChild = tables.children[1].children[i];

    for (let j = 0; j < students.length; j++) {

        if (j == i) {
            students[j] = "";
        }
    }
    trChild.innerHTML = "";

}


const changing =(e)=>{
    console.log(e.target.value);
    onLoad({firstName: e.target.value});
}

