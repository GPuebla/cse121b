
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
        divCard.style.margin = "5px";
        divCard.style.width = "20 px";
        divCard.style.width = "400 px";
        const bookImg2 = document.createElement('img');
        bookImg2.className = "card-img-top"
        bookImg2.style.height = "360px";
        //bookImg2.style.width = "150px";

        let genericImg = "https://th.bing.com/th/id/OIP.nBwIfauMfjWd0qbnifW7YgHaHa?pid=ImgDet&rs=1";

        const srcImg = await checkImg(`https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`, genericImg);
        bookImg2.src = srcImg;
        
        console.log(srcImg)

        bookImg2.src = srcImg;

        const divCardBody = document.createElement('div')
        divCardBody.className = "card-body";

        const cardTitle = document.createElement('h5');
        cardTitle.className = "card-title"
        cardTitle.innerHTML = book.title[0];

        const cardText = document.createElement('p');
        cardText.className = "card-text"
        cardText.innerHTML = book.author_name;

        const textTest = document.createElement('h4');
        textTest.innerHTML = bookImg2.textContent;

        colElement.append(divCard);
        divCard.append(bookImg2);
        divCard.append(divCardBody);
        divCardBody.append(cardTitle);
        divCardBody.append(cardText);

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
    return new Promise((resolve) => {
      const img = new Image();
      
      img.onload = function() {
        const width = this.width;
        const height = this.height;
  
        if (width >= 50 && height >= 50) {
          resolve(url);
        } else {
          resolve(optionalImg);
        }
      };
  
      img.onerror = function() {
        console.log("Error al cargar la imagen.");
        resolve(optionalImg);
      };
  
      img.src = url;
    });
  };


//--------------------------------------------------------------------------------------------//