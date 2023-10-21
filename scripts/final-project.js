booksElement = document.querySelector('#books');

const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json();
    console.log(response);
};

getTemples();