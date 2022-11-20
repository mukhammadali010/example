const classrooms = [
    {
        roomName: "Fizika xonasi",
        person: "Olimov .D",
        phone: "+998 99 788 45 87",
    },
    {
        roomName: "Matematika xonasi",
        person: "Toshboyev .D",
        phone: "+998 99 788 33 87",
    },
    {
        roomName: "Ona-tili xonasi",
        person: "Valiyev .D",
        phone: "+998 99 333 45 87",
    },
    {
        roomName: "Laboratoriya xonasi",
        person: "Akbarov .D",
        phone: "+998 99 788 45 33",
    },
]

const tables = document.getElementById("tables");
tables.style.fontSize = "26px";
const tbodyTables = tables.children[1];

function onLoad(filters ={}){
 
    
    // tozalash
    tbodyTables.innerHTML = "";

    const data = classrooms.filter((c )=> 
   
    c.roomName.includes(filters.roomName || "")
    );

    data.map((c , i)=>{
        const row = document.createElement("tr");

        row.innerHTML = `
        <tr>
        <th scope="row">${i + 1}</th>
        <td>${c.roomName}</td>
        <td>${c.person}</td>
        <td>${c.phone}</td>
        <td><button onclick=${`deleting(${i})`} class="btn"><i class="fa fa-trash fa-2x iconRedColor" id="trashIcon"></i></button></td>
      </tr>
        `
    
        tbodyTables.appendChild(row);
    })
}


function deleting(i) {
    const trChild = tables.children[1].children[i];
    for(let j = 0; j < classrooms.length; j++){

        if(j == i){
           classrooms[j] = "";
        }
    }
    trChild.innerHTML = "";

}

const changing =(e)=>{
    console.log(e.target.value);
    onLoad({roomName: e.target.value});
}
