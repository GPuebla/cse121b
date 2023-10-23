let data = [];

booksElement = document.querySelector('#books');
inputElement = document.querySelector('#input');

const AddData = (dataBooks) =>{

    console.log('books',dataBooks);

    booksElement.innerHTML = dataBooks;

    dataBooks.forEach(book => {
        const bookH3 = document.createElement('h3')
        bookH3.style.margin = '0'
        const bookH4 = document.createElement('h4');
        console.log('book',book); 
        bookH3.innerHTML = book.title;
        bookH4.innerHTML = book.first_publish_year;
        booksElement.append(bookH3);
        booksElement.append(bookH4);
    });
    

}


const getData = async () => {
    const response = await fetch("http://openlibrary.org/search.json?q="+inputElement.value)
    data = await response.json();
    
    AddData(data.docs);


};

