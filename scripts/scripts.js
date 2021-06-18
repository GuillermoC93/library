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

Book.prototype.changeReadStatus = function () {
  this.read ? this.read = false : this.read = true
}

const container = document.querySelector(".container");

function displayBooks(library) {
  i = -1

  // loop through library array 
  library.forEach(book => {
    // create elements needed for each book card
    let bookdiv = document.createElement("div");
    let titlediv = document.createElement("div");
    let authordiv = document.createElement("div");
    let pagesdiv = document.createElement("div");
    let readBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");

    // fill the divs with each books info
    titlediv.textContent = book.title
    authordiv.textContent = book.author
    pagesdiv.textContent = book.pages + "pg"
    readBtn.textContent = book.read ? "Read" : "Not Read"
    deleteBtn.textContent = "Delete"

    // add the particular class to each div
    bookdiv.classList.toggle("book");
    titlediv.classList.toggle("booktitle");
    authordiv.classList.toggle("bookauthor");
    pagesdiv.classList.toggle("bookpages");
    deleteBtn.classList.toggle("deleteBtn");

    // handle the readBtn class assignment
    book.read ? readBtn.classList.toggle("readBtn") : readBtn.classList.toggle("notReadBtn")

    // append each div to final book div
    bookdiv.appendChild(titlediv);
    bookdiv.appendChild(authordiv);
    bookdiv.appendChild(pagesdiv);
    bookdiv.appendChild(readBtn);
    bookdiv.appendChild(deleteBtn);

    // set the data-index value 
    bookdiv.dataset.index = (i += 1);

    // set data values to target in event listener
    readBtn.dataset.button = "readBtn"
    deleteBtn.dataset.button = "deleteBtn"

    // append final bookdiv to container parent
    container.appendChild(bookdiv);
  });
};

// event listener on the parent div
container.addEventListener('click', event => {
  // when the delete button is clicked
  if (event.target.dataset.button == "deleteBtn") {
    // get the parentNode of the target, so that i can assign the correct index number
    parentNode = event.target.parentNode
    myLibrary.splice(parentNode.dataset.index, 1)
    clearBooks();
    saveStorage(myLibrary);
    displayBooks(myLibrary);
    // if the read or not read button is pushed
  } else if (event.target.dataset.button == "readBtn") {
    parentNode = event.target.parentNode
    // change the read status of the parent node, which is assigned to the my Library
    // array through the dataset index value
    myLibrary[parentNode.dataset.index].changeReadStatus()
    saveStorage(myLibrary);
    clearBooks();
    displayBooks(myLibrary);
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
  read = form.read.checked

  // push newly created Book object to library array
  myLibrary.push(new Book(title, author, pages, read));
  // reset form
  form.reset();
  // close pop up
  togglePopup();
  // clear books display before running displayBooks function again
  clearBooks();
  // save array to local storage
  saveStorage(myLibrary);
  // display array
  displayBooks(myLibrary);
});

// function to save data into local storage
function saveStorage(array) {
  let library = JSON.stringify(array)
  localStorage.setItem('books', library)
}

function load() {
  // if theres no local storage items
  if (!localStorage.getItem('books')) {
    displayBooks(myLibrary);
  } else {
    // get item from local storage
    let books = localStorage.getItem('books');
    // parse the raw data
    books = JSON.parse(books)
    // transform parsed data into book objects
    myLibrary = books.map(data => {
      return new Book(data.title, data.author, data.pages, data.read)
    })
    displayBooks(myLibrary);
  }
}

load()