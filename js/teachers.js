const teachers = [
    {
        firstName: "Mukhammadali",
        lastName: "Nosirov",
        subject: "Software Developing",
        phone: "+998 90 406 14 30"
    },
    {
        firstName: "Akbarjon",
        lastName: "Xaydarov",
        subject: "Ingiliz tili",
        phone: "+998 90 446 34 34"
    },
    {
        firstName: "Akramjon",
        lastName: "Toshboyev",
        subject: "Matematika",
        phone: "+99899 089 19 18"
    },
    {
        firstName: "Dilyorbek ",
        lastName: "Olimov",
        subject: "Fizika",
        phone: "+99890 347 45 30"
    },

];


const filter = document.getElementById('filter');
const tables = document.getElementById('tables');
tables.style.fontSize = "26px"
const tbodyTables = tables.children[1];

const row = document.createElement("tr");

function onLoad(filters = {}) {
 
    // tozalash
    tbodyTables.innerHTML = "";

    const data = teachers.filter((t , )=> 
    
    (t.firstName + t.lastName).includes(filters.firstName || "")
    )

    // qator qoshosh

    data.map((t, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
    <tr>
    <th scope="row">${i + 1}</th>
    <td>${t.firstName}</td>
    <td>${t.lastName}</td>
    <td>${t.subject}</td>
    <td>${t.phone}</td>
    <td><button class="btn" onclick=${`deleting(${i})`}><i class="fa fa-trash fa-2x iconRedColor"></i></button></td>
  </tr>
    `;
        tbodyTables.appendChild(row);
    })
}

// const filtering =(e)=>{
//     console.log(filter.innerHTML);
//     onLoad({firstName: e.target.value})
// }


const changing =(e)=>{
    console.log(e.target.value);
    onLoad({firstName: e.target.value.toLowerCase()});
}

function deleting(i) {
    const trChild = tables.children[1].children[i];
    for(let j = 0; j < teachers.length; j++){

        if(j == i){
           teachers[j] = "";
        }
    }
    trChild.innerHTML = "";

}


