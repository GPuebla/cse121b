/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];



/* async displayTemples Function */

const displayTemples = (temples) => {

   temples.forEach(temple => {

    const art = document.createElement('article');
    const h3 = document.createElement('h3').textContent = temple.templeName;
    const imga = document.createElement('img');

    imga.setAttribute('src',temple.imageUrl);
    imga.setAttribute('alt',temple.location);

    art.append(h3);
    art.append(imga);

    templesElement.append(art);

   }); 
}; 

/* async getTemples Function using fetch()*/

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json();
    
};

/* reset Function */
const reset = () =>{
    templesElement.innerHTML = "";
};

/* sortBy Function */
const sortBy = (temples) =>{

    reset();

    let filter = document.querySelector('#sortBy').value;
    console.log(filter)

    switch (filter) {
        case "utah":
            displayTemples(temples.filter( temple => temple.templeName.includes("Utah") || temple.templeName.includes("Provo") || temple.templeName.includes("Salt Lake")));

            break;

        case "notutah":
            displayTemples(temples.filter( temple => !temple.templeName.includes("Utah") && !temple.templeName.includes("Provo") && !temple.templeName.includes("Salt Lake")));
            break;
        
        case "older":
            displayTemples(temples.filter( temple => new Date(temple.dedicated) < 1950));
            break;

        case "all":
            displayTemples(temples);
            break;
    }
   
};


getTemples();

//console.log(templeList[0].filter( temple => temple.templeName.includes("Utah")));
console.log(templeList[0]);


/* Event Listener */

document.querySelector('#sortBy').addEventListener("change",() => {sortBy(templeList)});

