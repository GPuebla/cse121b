/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

const fullName = "Gabriel Puebla";
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let profilePicture = "images/my_photo.jpeg"

/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector("#my_image");
console.log(profilePicture);

/* Step 4 - Adding Content */

nameElement.innerHTML =`<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('ref',`Profile image of ${fullName}`);




/* Step 5 - Array */
let favoriteFoods = ["Hot dog","Hamburger","Fries","Asado"];
foodElement.innerHTML += `<br>${favoriteFoods}`;
let favFood = "Soup";
favoriteFoods.push(favFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;




