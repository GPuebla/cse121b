/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let  myProfile = {
    name: "Gabriel Puebla",
    photo: "images/my_photo.jpeg",
    favoriteFoods: ["Spaghetti bolognese","Beef burger", "Zucchini fritters","Asado","Lasagne","Chicken with potato"],
    hobbies: ["Learning new things", "Play piano","Cooking","Listening to music"],
    placesLived: [],
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place:"San Rafael, Mendoza",
        length: "19 years"
    }
);

myProfile.placesLived.push(
    {
        place:"Belem, Brasil",
        length: "2 years"
    }
);

myProfile.placesLived.push(
    {
        place:"Maipu, Mendoza",
        length: "7 years"
    }
);


/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src",myProfile.photo);
document.querySelector("#photo").setAttribute("alt",myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
});
/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place['place'];
    dd.textContent = place['length']
    document.querySelector("#places-lived").appendChild(dt).appendChild(dd);
});


