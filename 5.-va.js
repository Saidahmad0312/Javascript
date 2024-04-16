const createBookCollection = () => {
    let books = [];

    const addBook = (title, author, id) => {
        books.push({ title, author, id });
    };

    const findBookById = (id) => {
        return books.find(book => book.id === id);
    };

    const showAllBooks = () => {
        return books;
    };

    const sortByAuthor = () => {
        return books.slice().sort((a, b) => a.author.localeCompare(b.author));
    };

    const showReadBooks = () => {
        return books.filter(book => book.read);
    };

    const removeBook = (id) => {
        books = books.filter(book => book.id !== id);
    };

    return { addBook, findBookById, showAllBooks, sortByAuthor, showReadBooks, removeBook };
};

const bookCollection = createBookCollection();

bookCollection.addBook("Harry Potter", "J.K. Rowling", 1);
bookCollection.addBook("To Kill a Mockingbird", "Harper Lee", 2);
bookCollection.addBook("1984", "George Orwell", 3);

console.log(bookCollection.showAllBooks());
console.log(bookCollection.findBookById(2));
bookCollection.removeBook(2);
console.log(bookCollection.showAllBooks());
