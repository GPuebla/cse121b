/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Gabriel Puebla";
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let profilePicture = "Images\my_photo.jpeg"

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("img[src='#']");
console.log(imageElement);

/* Step 4 - Adding Content */
nameElement.innerHTML =`<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute("src",`${profilePicture}`);




/* Step 5 - Array */






