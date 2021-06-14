let myLibrary = [
  {
    title: "harry potter",
    author: "jk rowling",
    pages: 255,
    read: "yes",
  },
  {
    title: "game of thrones",
    author: "grr martin",
    pages: 523,
    read: "yes",
  },
  {
    title: "atomic habits",
    author: "james clear",
    pages: 244,
    read: "no",
  }
];

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

function displayBooks() {
  const container = document.querySelector(".container");

  myLibrary.forEach(book => {
    const bookdiv = document.createElement("div");
    const titlediv = document.createElement("div");
    const authordiv = document.createElement("div");
    const pagesdiv = document.createElement("div");
    const readdiv = document.createElement("div");

    titlediv.textContent = book.title
    authordiv.textContent = book.author
    pagesdiv.textContent = book.pages
    readdiv.textContent = book.read

    bookdiv.classList.toggle("book")
    titlediv.classList.toggle("booktitle")
    authordiv.classList.toggle("bookauthor")
    pagesdiv.classList.toggle("bookpages")
    readdiv.classList.toggle("bookread")

    bookdiv.appendChild(titlediv)
    bookdiv.appendChild(authordiv)
    bookdiv.appendChild(pagesdiv)
    bookdiv.appendChild(readdiv)

    container.appendChild(bookdiv)
  })
}

displayBooks()