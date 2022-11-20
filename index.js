

const cards = document.getElementById("cards");



// bo'limlar 
const sections =[
    {title: "O'qituvchilar" , link: "./teachers.html"},
    {title: "O'quvchilar" , link: "./students.html"},
    {title: "Xodimlar" , link: "./employers.html"},
    {title: "fanlar" , link: "./subjects.html"},
    {title: "xonalar" , link: "./classrooms.html"},
    {title: "dars jadvallari" , link: "./schedule.html"},
];

const setCards=()=>{
    cards.innerHTML = "";
    
    sections.map((section)=>{
    
        const link = document.createElement("a");
        link.href = section.link;
        link.innerHTML = section.title;
        link.className = "card p-5 me-4 mt-4 bg-white shadow rounded text-center d-block";
        
        const card = document.createElement("div");
        card.className ="col-md-6 col-lg-4";

        card.appendChild(link);
        cards.appendChild(card);
        console.log(cards);
    })
}

setCards();

// bo'limlar end