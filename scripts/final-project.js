let data = [];

booksElement = document.querySelector('#books');
inputElement = document.querySelector('#input');

const AddData = (dataBooks) =>{

        reset();
        console.log('books',dataBooks);

        dataBooks.forEach(book => {
            
        let isbnNum = book.isbn["0"]
        const colElement = document.createElement('div');
        colElement.className = 'col';

        const divCard = document.createElement('div')
        divCard.className = "card";
        divCard.style.width = "20 px";
        divCard.style.width = "100 px";
        const bookImg2 = document.createElement('img');
        bookImg2.className = "card-img-top"
        bookImg2.style.height = "50 px";
        bookImg2.src = `https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`

        const divCardBody = document.createElement('div')
        divCardBody.className = "card-body";

        const cardTitle = document.createElement('h5');
        cardTitle.className = "card-title"
        cardTitle.innerHTML = book.title[0];

        const cardText = document.createElement('p');
        cardTitle.className = "card-text"
        cardTitle.innerHTML = book.publisher[0];

        colElement.append(divCard);
        divCard.appendChild(bookImg2);
        divCard.appendChild(divCardBody);
        divCardBody.appendChild(cardTitle);

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

