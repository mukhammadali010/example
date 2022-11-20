subjects = [
    {
        subName: "Adabiyot",
        teacherName: "Xoliqov . M",
        phone: "+998 99 142 12 41"
    },
    {
        subName: "Ona-tili",
        teacherName: "Salimov . S",
        phone: "+998 99 133 12 41"
    },
    {
        subName: "Matematika",
        teacherName: "Komilov .D",
        phone: "+998 99 142 33 41"
    },
    {
        subName: "Ingliz tili",
        teacherName: "Qayumov . I",
        phone: "+998 99 542 12 31"
    },
    {
        subName: "Informatika",
        teacherName: "Mosayev .A",
        phone: "+998 99 642 12 41"
    },
    {
        subName: "Algebra",
        teacherName: "Zohidov. Q",
        phone: "+998 99 142 62 41"
    },
];

const tables = document.getElementById("tables");
tables.style.fontSize = "26px"
const tbodyTables = tables.children[1];


function onLoad(filters ={}) {
   
      // tozalash
      tbodyTables.innerHTML = "";

      const data = subjects.filter((sub ,)=> 
     
      sub.subName.includes(filters.subName || "")
      );
  

    data.map((sub, i) => {

        const row = document.createElement("tr");

        row.innerHTML = `
    <tr>
    <th scope="row">${i + 1}</th>
    <td>${sub.subName}</td>
    <td>${sub.teacherName}</td>
    <td>${sub.phone}</td>
    <td><button onclick=${`deleting(${i})`} class="btn"><i class="fa fa-trash fa-2x iconRedColor" id="trashIcon"></i></button></td>
  </tr>
    `
        tbodyTables.appendChild(row);
    })
}

function deleting(i) {
    const trChild = tables.children[1].children[i];
    for(let j = 0; j < subjects.length; j++){

        if(j == i){
           subjects[j] = "";
        }
    }
    trChild.innerHTML = "";

}

const changing =(e)=>{
    console.log(e.target.value);
    onLoad({subName: e.target.value});
}