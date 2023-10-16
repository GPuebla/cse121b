/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];



/* async displayTemples Function */

const displayTemples = (temples) => {

   temples.forEach(temple => {

    const art = document.createElement('article');
    const h3 = document.createElement('h3').textContent = temple['templeName'];
    const imga = document.createElement('img');

    imga.setAttribute('src',temple['imageUrl']);
    imga.setAttribute('alt',temple['location']);

    art.appendChild(h3);
    art.appendChild(imga);

    templesElement.appendChild(art);

   }); 
}; 

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")

    templeList = await response.json();

    displayTemples(templeList.filter( temple => temple.templeName.includes("Utah")));
    console.log(templeList.filter( temple => temple.templeName.includes("Utah")));
    
};

/* reset Function */
const reset = () =>{
    templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = (temples) =>{
    reset();
    let filter = document.querySelector('#sortBy').value;
    switch (filter) {
        case "utah":
            displayTemples(templeList[0].filter( temple => temple.templeName.includes("Utah")));

            break;

        case "nonutah":
            //displayTemples(templeList[0].filter( temple => temple.templeName.includes("")));
            break;
        
        case "older":
            
            break;

        case "all":
        
            break;
    
        default:
            break;
    }
   
};


getTemples();

//console.log(templeList[0].filter( temple => temple.templeName.includes("Utah")));
console.log(templeList[0]);


/* Event Listener */