
let data = [];
let datafilter = [];

booksElement = document.querySelector('#books');
inputElement = document.querySelector('#input');

const AddData = (dataBooks) =>{

        

        reset();
        datafilter = []

        dataBooks.forEach(async book => {
          
          console.log(book)
        
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

        const divCardBody = document.createElement('div')
        divCardBody.className = "card-body";

        const cardTitle = document.createElement('h5');
        cardTitle.style.fontSize = '1rem';
        cardTitle.className = "card-title"
        cardTitle.innerHTML = book.title;

        const cardText = document.createElement('p')
        cardText.style.fontSize = '.6rem';
        cardText.className = "card-text"
        cardText.innerHTML = book.author_name[0];

        const cardYear = document.createElement('p');
        cardYear.innerHTML = "-" + book.first_publish_year +"-";

        const btn = document.createElement('a');
        btn.innerHTML = 'More info';
        btn.className = "btn btn-primary"
        btn.href = 'https://openlibrary.org/' + book.key;
        btn.target = "_blank"

        let filterElement = document.querySelector('#sortBy')
        filterElement.style.display = 'block';

        let filterButon= document.querySelector('#btnfilter')
        filterButon.style.display = 'block';

        colElement.append(divCard);
        divCard.append(bookImg2);
        divCard.append(divCardBody);
        divCardBody.append(cardTitle);
        divCardBody.append(cardText);
        divCardBody.append(cardYear);
        divCardBody.append(btn);

        booksElement.append(colElement);
        
        filterBooks(datafilter,genericImg,srcImg,book)
    });

}

//---------------------------------------------------------------------//


const getData = async () => {
    const response = await fetch("https://openlibrary.org/search.json?q="+inputElement.value)
    data = await response.json();
    
    console.log(data)
    AddData(data.docs);
};

//---------------------------------------------------------------------//


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
        console.log("Error");
        resolve(optionalImg);
      };
  
      img.src = url;
    });
  };

 //--------------------------------------------------------------------------------------------//

  const printArray = (array) =>{
    console.log(array)
    AddData(datafilter)
    datafilter = []
  }

  //--------------------------------------------------------------------------------------------//

  const filterBooks = (array, url1,url2, Objt) => {

    if(url1 !== url2){
      array.push(Objt)
    }
  }


//--------------------------------------------------------------------------------------------//

/* sortBy Function */
const sortBy = (data) =>{

  reset();

  let filter = document.querySelector('#sortBy').value;
  console.log(filter)

  switch (filter) {
      case "modern":
          AddData(data.docs.filter( book => new Date(book.first_publish_year) >= 2000));

          break;

      case "contemporary":
          AddData(data.docs.filter( book => new Date(book.first_publish_year) < 2000));
          break;
      
      case "antique":
          AddData(data.docs.filter( book => new Date(book.first_publish_year) < 1900));
          break;

      case "all":
          AddData(data.docs);
          break;
  }
 
};

document.querySelector('#sortBy').addEventListener("change",() => {sortBy(data)});
