// Define the Library Management System (use the provided JavaScript logic)

const Library = {
    books: [],

    addBook(book) {
        this.books.push(book);
        renderBookList();
    },

    listAvailableBooks() {
        return this.books.filter(book => !book.isBorrowed);
    }
};

function createBook(title, author) {
    return {
        title,
        author,
        isBorrowed: false
    };
}

function User(name) {
    this.name = name;
    this.borrowedBooks = [];
}

User.prototype.borrowBook = function(library, bookTitle) {
    const book = library.books.find(b => b.title === bookTitle && !b.isBorrowed);
    if (book) {
        book.isBorrowed = true;
        this.borrowedBooks.push(book);
        document.getElementById('borrowMessage').textContent = `${this.name} borrowed "${book.title}".`;
        renderBookList();
    } else {
        document.getElementById('borrowMessage').textContent = `The book "${bookTitle}" is not available.`;
    }
};

User.prototype.returnBook = function(library, bookTitle) {
    const bookIndex = this.borrowedBooks.findIndex(b => b.title === bookTitle);
    if (bookIndex !== -1) {
        const book = this.borrowedBooks.splice(bookIndex, 1)[0];
        book.isBorrowed = false;
        document.getElementById('returnMessage').textContent = `${this.name} returned "${book.title}".`;
        renderBookList();
    } else {
        document.getElementById('returnMessage').textContent = `The book "${bookTitle}" was not borrowed by ${this.name}.`;
    }
};

// Render the available book list
function renderBookList() {
    const bookListElement = document.getElementById('bookList');
    bookListElement.innerHTML = '';

    Library.listAvailableBooks().forEach(book => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;
        bookListElement.appendChild(li);
    });
}

// Event listeners for forms
document.getElementById('addBookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('bookAuthor').value;
    Library.addBook(createBook(title, author));
});

document.getElementById('borrowBookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userName = document.getElementById('userName').value;
    const bookTitle = document.getElementById('borrowBookTitle').value;
    const user = new User(userName);
    user.borrowBook(Library, bookTitle);
});

document.getElementById('returnBookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userName = document.getElementById('returnUserName').value;
    const bookTitle = document.getElementById('returnBookTitle').value;
    const user = new User(userName);
    user.returnBook(Library, bookTitle);
});

// Initial call to render the book list
renderBookList();
