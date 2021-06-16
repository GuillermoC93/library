let myLibrary = [];

function Book (title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`
  }
};

function addBookToLibrary() {
  let title = prompt("Please enter the book title")
  let author = prompt("Please enter book author")
  let pages = prompt("Please enter the number of pages in the book")
  let read = prompt("Have you read this book?")
  myLibrary.push(new Book(title, author, pages, read))
  return
};

const container = document.querySelector(".container");

function displayBooks() {
  i = -1

  // loop through library array 
  myLibrary.forEach(book => {
    // create elements needed for each book card
    bookdiv = document.createElement("div");
    titlediv = document.createElement("div");
    authordiv = document.createElement("div");
    pagesdiv = document.createElement("div");
    readdiv = document.createElement("div");
    deleteBtn = document.createElement("button");

    // fill the divs with each books info
    titlediv.textContent = book.title
    authordiv.textContent = book.author
    pagesdiv.textContent = book.pages + "pg"
    readdiv.textContent = book.read
    deleteBtn.textContent = "Delete"

    // add the particular class to each div
    bookdiv.classList.toggle("book")
    titlediv.classList.toggle("booktitle")
    authordiv.classList.toggle("bookauthor")
    pagesdiv.classList.toggle("bookpages")
    readdiv.classList.toggle("bookread")
    deleteBtn.classList.toggle("deleteBtn")

    // append each div to final book div
    bookdiv.appendChild(titlediv)
    bookdiv.appendChild(authordiv)
    bookdiv.appendChild(pagesdiv)
    bookdiv.appendChild(readdiv)
    bookdiv.appendChild(deleteBtn)

    // set the data-index value 
    bookdiv.dataset.index = (i += 1)

    // append final bookdiv to container parent
    container.appendChild(bookdiv)
  });
};

// event listener on the parent div
container.addEventListener('click', event => {
  // when the delete button is clicked
  if (event.target.classList == "deleteBtn") {
    // get the parentNode of the target, so that i can assign the correct index number
    parentNode = event.target.parentNode
    myLibrary.splice(parentNode.dataset.index, 1)
    clearBooks();
    displayBooks();
  }
})

// function for clearing display
function clearBooks() {
  while(container.firstChild){
    container.removeChild(container.firstChild);
}};

// function for toggling the pop up display
function togglePopup(){
  document.getElementById("popup-1").classList.toggle("active");
};

const form = document.querySelector('#form1');
const submitBtn = document.querySelector('.formBtn');
submitBtn.addEventListener('click', event => {
  event.preventDefault();

  // assign form values to variables
  title = form.btitle.value
  author = form.bauthor.value
  pages = form.bpages.value
  read = form.read.checked ? "read" : "not read"

  // push newly created Book object to library array
  myLibrary.push(new Book(title, author, pages, read));
  // reset form
  form.reset();
  // close pop up
  togglePopup();
  // clear books display before running displayBooks function again
  clearBooks();
  displayBooks();
});

displayBooks();