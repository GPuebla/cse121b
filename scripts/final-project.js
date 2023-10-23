let data = [];

booksElement = document.querySelector('#books');
inputElement = document.querySelector('#input');

const AddData = (dataBooks) =>{

    reset();
    console.log('books',dataBooks);

    dataBooks.forEach(book => {
        const bookH3 = document.createElement('h3')
        bookH3.style.margin = '0'
        const bookH4 = document.createElement('h4');
        const bookImg = document.createElement('img');
        console.log('book',book); 
        bookH3.innerHTML = book.title;
        let isbnNum = book.isbn["0"]
        bookH4.innerHTML = book.first_publish_year;
        let srcLink = `https://covers.openlibrary.org/b/isbn/${isbnNum}-M.jpg`
        bookImg.setAttribute('src',srcLink);

        booksElement.append(bookH3);
        booksElement.append(bookH4);
        booksElement.append(bookImg);
       // booksElement.append(document.createElement(h5).innerHTML = isbnNum);

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

