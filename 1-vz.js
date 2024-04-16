class BookList {
    constructor() {
      this.books = [];
      this.favoriteBook = '';
    }
  
    addBook(title, author) {
      const newBook = { title: title, author: author };
      this.books.push(newBook);
    }
  
    setFavoriteBook(title) {
      this.favoriteBook = title;
    }
  
    getBooksList() {
      console.log("Barcha kitoblar:");
      this.books.forEach(book => {
        console.log(`${book.title}, muallif: ${book.author}`);
      });
    }
  
    getFavoriteBook() {
      console.log("Sevimli kitob: ", this.favoriteBook);
    }
  }
  
  const myBookList = new BookList();
  myBookList.addBook("Harry Potter", "J.K. Rowling");
  myBookList.addBook("Oila", "M.S.M.Yusuf");
  myBookList.addBook("Sariq Dev M", "Xudoyberdi Toxtaboyev");
  
  myBookList.getBooksList();
  
  myBookList.setFavoriteBook("1984");
  myBookList.getFavoriteBook();
  