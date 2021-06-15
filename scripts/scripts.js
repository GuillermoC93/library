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

const container = document.querySelector(".container");
function displayBooks() {
  myLibrary.forEach(book => {
    bookdiv = document.createElement("div");
    titlediv = document.createElement("div");
    authordiv = document.createElement("div");
    pagesdiv = document.createElement("div");
    readdiv = document.createElement("div");

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

function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
}

const form = document.querySelector('#form1')
form.addEventListener('submit', event => {
  event.preventDefault()
  console.log(event)
})

displayBooks()