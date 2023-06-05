import { DateTime } from './modules/luxon.js';
import linkPage from './modules/links_UI.js';
import Book from './modules/display_books.js';

const booksForm = document.getElementById('bookForm');

const storeBook = new Book();
booksForm.addEventListener('submit', storeBook.addBook);
storeBook.displayBooks();

linkPage();

const now = DateTime.now();
const date = now.toLocaleString(DateTime.DATETIME_FULL);

document.getElementById('date').textContent = date;
