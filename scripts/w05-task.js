/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];



/* async displayTemples Function */

const displayTemples = (temples) => {

   temples.array.forEach(temple => {

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
    .then(data => data.json())
    
    templeList.push(response);
};

/* reset Function */
const reset = () =>{
    templesElement.innerHTML = "";
};

/* sortBy Function */



getTemples();

/* Event Listener */


console.log(templeList);