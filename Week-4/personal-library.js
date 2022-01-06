class Library {
  constructor(nextBook, currentBook, lastRead) {
    /// The Library class should have the following properties:
    // Number of books marked as read
    this.readCounts = 0
    // Number of books not read
    this.unreadCounts = 0
    // The next book to read
    this.nextBook = nextBook;
    // The current book being read
    this.currentBook = currentBook;
    // Last book read
    this.lastRead = lastRead;
    // An array containing all the Books
    this.books = [];

    this.readBooks = [];
    this.unreadBooks = []
  }

  // The Library should also be able to have a few methods:
  // .add(book) --- should add a Book to the list of books
  // .finishCurrentBook() --- should mark the current read Book as "read". Adjust the last read book, the new currently read book, and the next book to read in the series.

  add(book) {
    this.books.push(book);
    this.unreadBooks.push(book);
    this.unreadCounts++
  }

  finishCurrentBook() {
    this.readBooks.push(this.currentBook)
    this.lastRead = this.currentBook
    this.readCounts++
    this.unreadCounts--
    this.currentBook = null
  }

  read(book) {
    book.dateRead = Date.now()
    this.currentBook = book
    this.unreadBooks = this.unreadBooks.filter((item) => item.title !== book.title);
    this.nextBook = this.unreadBooks.pop();
  }  
}
class Book {
  constructor(author, title, genre, dateRead) {
     
    // Each Book should have the following instance fields:
    // Author
    // Title
    // Genre
    // Date read
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.dateRead = dateRead;
  }
}

//initialize library
const myLibrary = new Library()
//create books
const myBook1 = new Book("Louisa May Alcott","Little Women","Classic")
const myBook2 = new Book("Antoine de Saint-Exupéry","The Little Prince","Fairy Tale")
const myBook3 = new Book("Paulo Coelho","The Alchemist","Novel")
const myBook4 = new Book("C.S. Lewis","The Lion, the Witch and the Wardrobe","Fantasy Fiction")
const myBook5 = new Book("J. K. Rowling","Harry Potter and the Sorcerer's Stone","Fantasy Fiction")

//add books to library
myLibrary.add(myBook1)
myLibrary.add(myBook2)
myLibrary.add(myBook3)
myLibrary.add(myBook4)
myLibrary.add(myBook5)

//console log properties
console.log("**************Initial Properties**********************")
console.table(myLibrary.books)
console.log("read counts",myLibrary.readCounts)
console.log("unread counts",myLibrary.unreadCounts)
console.log("next book", myLibrary.nextBook)
console.log("current book", myLibrary.currentBook)
console.log("last read book", myLibrary.lastRead)
console.log("**************************************************")

//read 1 book
console.log("*****************Start Reading 1st Book**********************")

myLibrary.read(myBook1)
console.log("Reading", myBook1.title )

//show data changes
console.table(myLibrary.books)
console.log("read counts",myLibrary.readCounts)
console.log("unread counts",myLibrary.unreadCounts)
console.log("next book", myLibrary.nextBook)
console.log("current book", myLibrary.currentBook)
console.log("last read book", myLibrary.lastRead)

//flag currentbook as read
console.log("Finished reading", myLibrary.currentBook.title)
myLibrary.finishCurrentBook()
console.log("*************End Reading 1st Book*****************")

//show data changes
console.log("**************New Properties**********************")

console.table(myLibrary.books)
console.log("read counts",myLibrary.readCounts)
console.log("unread counts",myLibrary.unreadCounts)
console.log("next book", myLibrary.nextBook)
console.log("current book", myLibrary.currentBook)
console.log("last read book", myLibrary.lastRead)
console.log("**************************************************")

//read next book
console.log("*****************Start Reading 2nd Book**********************")
console.log("Reading", myLibrary.nextBook.title )
myLibrary.read(myLibrary.nextBook)

//show data changes
console.table(myLibrary.books)
console.log("read counts",myLibrary.readCounts)
console.log("unread counts",myLibrary.unreadCounts)
console.log("next book", myLibrary.nextBook)
console.log("current book", myLibrary.currentBook)
console.log("last read book", myLibrary.lastRead)

//flag currentbook as read
console.log("Finished reading", myLibrary.currentBook.title)
myLibrary.finishCurrentBook()
console.log("*************End Reading 2nd Book*****************")

//show data changes
console.log("**************New Properties**********************")

console.table(myLibrary.books)
console.log("read counts",myLibrary.readCounts)
console.log("unread counts",myLibrary.unreadCounts)
console.log("next book", myLibrary.nextBook)
console.log("current book", myLibrary.currentBook)
console.log("last read book", myLibrary.lastRead)