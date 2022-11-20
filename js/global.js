const head = document.getElementById('head');
const sidebar = document.getElementById('sidebar');
const menu = document.getElementById('btn');
const card = document.querySelectorAll("#card");
const darkMode = document.getElementById('darkMode');
const moonsun = document.getElementById('moonsun');
const content = document.getElementById('content');
const body = document.getElementById('body');

// sidebar section 
const toggle =()=>{
    if(sidebar.classList.contains("hide")) sidebar.classList.remove("hide");
    else sidebar.classList.add("hide");
};

menu.onclick =()=> toggle();

// sidebar section end

const keyUp =(e)=>{
    if(e.key === "Escape") sidebar.classList.add("hide");
}


const tablesColor = document.getElementById('tables');


// kun tun rejimi 
const sunMoon =()=>{
    if(moonsun.classList.contains('fa-moon')) { 
        moonsun.classList.remove('fa-moon');
        moonsun.classList.add('fa-sun');
    }
    
    else {
        moonsun.classList.remove('fa-sun');
        moonsun.classList.add('fa-moon');
    }  

    if(!head.classList.contains('dark')) {
        head.classList.add('dark');
        menu.style.color ='white';
        darkMode.style.color ='white';
        content.classList.add('darker');
        tablesColor.classList.add('darker');
        tablesColor.classList.remove('table-striped');
        for(let i=0; i < card.length; i++){
            card[i].classList.add('darker1');
        }
        sidebar.style.background = "black"
    }
    else{
        head.classList.remove('dark');
        menu.style.color ='black';
        darkMode.style.color ='black';
        content.classList.remove('darker');
        tablesColor.classList.remove('darker');
       
        for(let i=0; i < card.length; i++){
            card[i].classList.remove('darker1');
        }
        sidebar.style.background ="rgba(28, 28, 100, 0.925)";
    } 

    
}

darkMode.onclick =()=> sunMoon();

// kun tun rejimi end


const tbadyTables2 = tables.children[1];

const deleteAll=()=>{
    tbadyTables2.innerHTML ="";
}


const deleteall = document.getElementById('deleteall');
deleteall.onclick =()=>deleteAll();

