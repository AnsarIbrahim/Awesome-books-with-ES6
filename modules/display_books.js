class Book {
  constructor() {
    this.booksParent = document.getElementById('table-row');
    this.titleInput = document.getElementById('title');
    this.authorInput = document.getElementById('author');
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.addBook = this.addBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.displayBooks();
  }

  addBook(e) {
    e.preventDefault();
    const title = this.titleInput.value;
    const author = this.authorInput.value;
    if (title && author) {
      const newBook = { title, author };
      this.books.push(newBook);
      localStorage.setItem('books', JSON.stringify(this.books));
      this.titleInput.value = '';
      this.authorInput.value = '';
      this.bookElement(newBook, this.books.length - 1);
    }
  }

  bookElement(book, index) {
    const bookContainer = document.createElement('td');
    if (index % 2 === 0) {
      bookContainer.classList.add('dark');
    }

    const removeButton = document.createElement('button');
    removeButton.setAttribute('class', 'btn  btn-sm btn-danger');
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', () => {
      this.deleteBook(index);
    });
    bookContainer.append(`"${book.title}" by ${book.author}`, removeButton);
    this.booksParent.appendChild(bookContainer);
    bookContainer.scrollIntoView({ behavior: 'smooth' });
  }

  displayBooks() {
    this.booksParent.innerHTML = '';
    this.books.forEach((book, index) => {
      this.bookElement(book, index);
    });
  }

  deleteBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.displayBooks();
  }
}

export default Book;
