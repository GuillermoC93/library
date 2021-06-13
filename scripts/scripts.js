let myLibrary = [];

function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
  }
}

function addBookToLibrary() {
  let title = prompt("Please enter the book title")
  let author = prompt("Please enter book author")
  let pages = prompt("Please enter the number of pages in the book")
  let read = prompt("Have you read this book?")
  myLibrary.push(new Book(title, author, pages, read))
  return
}
