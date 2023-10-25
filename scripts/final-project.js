
let data = [];

booksElement = document.querySelector('#books');
inputElement = document.querySelector('#input');

const AddData = (dataBooks) =>{

        reset();
        console.log('books',dataBooks);

        dataBooks.forEach(async book => {
            
        let isbnNum = book.isbn[0];
        
        const colElement = document.createElement('div');
        colElement.className = 'col';

        const divCard = document.createElement('div')
        divCard.className = "card";
        divCard.style.width = "20 px";
        divCard.style.width = "100 px";
        const bookImg2 = document.createElement('img');
        bookImg2.className = "card-img-top"
        //bookImg2.style.height = "40 px";
        //bookImg2.style.width = "30 px";

        let genericImg = "https://th.bing.com/th/id/OIP.nBwIfauMfjWd0qbnifW7YgHaHa?pid=ImgDet&rs=1";

        let srcImg = await checkImg(`https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`,genericImg);
        
    console.log(srcImg)

        bookImg2.src = srcImg;

        const divCardBody = document.createElement('div')
        divCardBody.className = "card-body";

        const cardTitle = document.createElement('h5');
        cardTitle.className = "card-title"
        cardTitle.innerHTML = book.title[0];

        const cardText = document.createElement('p');
        cardTitle.className = "card-text"
        cardTitle.innerHTML = book.publisher[0];

        const textTest = document.createElement('h4');
        textTest.innerHTML = bookImg2.textContent;

        colElement.append(divCard);
        divCard.appendChild(bookImg2);
        divCard.appendChild(divCardBody);
        divCardBody.appendChild(cardTitle);
        divCardBody.append(textTest);

        booksElement.append(colElement);

    });

}


const getData = async () => {
    const response = await fetch("https://openlibrary.org/search.json?q="+inputElement.value)
    data = await response.json();
    

    AddData(data.docs);
};

const reset = () =>{
    booksElement.innerHTML = "";
};


//---------------------------------------------------------------------//

const checkImg = (url, optionalImg) => {

    // URL de la imag
    const imageUrl = url

    // Crea un nuevo objeto de imagen
    const img = new Image();

    // Define una función para ejecutar cuando la imagen se cargue
     img.onload = function  () {
    // Accede a las dimensiones de la imagen
    const width = this.width;
    const height = this.height;

    // Verifica el tamaño de la imagen (por ejemplo, 100x100 píxeles)
        if (width >= 50 && height >= 50) {
            // La imagen tiene el tamaño deseado
            console.log("La imagen tiene el tamaño deseado (100x100 píxeles).");
            return url
        } else {
            // La imagen no tiene el tamaño deseado
            console.log("La imagen no tiene el tamaño deseado.");
            return optionalImg
        }
    };

    // Define una función para ejecutar si la imagen no se puede cargar
    img.onerror = function() {
    console.log("Error al cargar la imagen.");
    };

    // Establece la fuente de la imagen
    img.src = imageUrl;

}


//--------------------------------------------------------------------------------------------//