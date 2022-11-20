employers  = [
    {
        firstName : "Akbarjon",
        lastName: "Xoliqov",
        jobTitle: "Direktor",
        phone: "+998 99 142 12 41"
    },
    {
        firstName : "Solijon",
        lastName: "Salimov",
        jobTitle: "Zam direktor",
        phone: "+998 99 133 12 41"
    },
    {
        firstName : "Sarvarjon",
        lastName: "Komilov",
        jobTitle: "Kutubxonachi",
        phone: "+998 99 142 33 41"
    },
    {
        firstName : "Davlatbek",
        lastName: "Qayumov",
        jobTitle: "Zavuch",
        phone: "+998 99 542 12 31"
    },
    {
        firstName : "Nodirjon",
        lastName: "Mosayev",
        jobTitle: "AKT xodimi",
        phone: "+998 99 642 12 41"
    },
    {
        firstName : "Karimjon",
        lastName: "Zohidov",
        jobTitle: "Qorovul",
        phone: "+998 99 142 62 41"
    },
];

const tables = document.getElementById("tables");
tables.style.fontSize = "26px"
const tbodyTables = tables.children[1];


function onLoad(filters ={}){
    
    // tozalash
    tbodyTables.innerHTML = "";

    const data = employers.filter((emp , )=> 
   
    emp.firstName.includes(filters.firstName || "")
    );

   data.map((emp , i)=>{

    const row = document.createElement("tr");

    row.innerHTML = `
    <tr>
    <th scope="row">${i+1}</th>
    <td>${emp.firstName}</td>
    <td>${emp.lastName}</td>
    <td>${emp.jobTitle}</td>
    <td>${emp.phone}</td>
    <td><button onclick=${`deleting(${i})`} class="btn"><i class="fa fa-trash fa-2x iconRedColor" id="trashIcon"></i></button></td>
  </tr>
    `
    tbodyTables.appendChild(row);
   })
}



function deleting(i) {
    const trChild = tables.children[1].children[i];
    for(let j = 0; j < employers.length; j++){

        if(j == i){
           employers[j] = "";
        }
    }
    trChild.innerHTML = "";

}

const changing =(e)=>{
    console.log(e.target.value);
    onLoad({firstName: e.target.value});
}