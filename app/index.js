const bookFormSection = document.querySelector(".new_book_form_section");
const addNewBookBtn = document.querySelector("#add_new_book");
const closFormBtn = document.querySelector("#close_btn");
const bookTitlte = document.querySelector("#title");
const bookAuthor = document.querySelector("#author");
const bookCategory = document.querySelector("#category");
const bookYear = document.querySelector("#year");
const bookPrice = document.querySelector("#price");
const bookImage = document.querySelector("#image");
const addBookBtn = document.querySelector("#add_book_btn");
const newBookForm = document.querySelector("#new_book_form");
const bookList = JSON.parse(localStorage.getItem("book-list"));

addNewBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bookFormSection.style = "display:block";
});

closFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bookFormSection.style = "display: none";
  location.reload();
});

const addBook = () => {
  let bookList;
  let book = { title: bookTitlte.value, author: bookAuthor.value, category: bookCategory.value, year: bookYear.value, price: bookPrice.value, image: bookImage.value };
  if (!localStorage["book-list"]) bookList = [];
  else bookList = JSON.parse(localStorage["book-list"]);
  if (!(bookList instanceof Array)) bookList = [];
  bookList.push(book);
  addIndex(bookList);
  console.log(book);
  localStorage.setItem("book-list", JSON.stringify(bookList));
};

const addAuthor = () => {
  let authorList;
  let author = bookAuthor.value;
  if (!localStorage["author-list"]) {
    authorList = [];
    authorList.push(author);
  } else {
    authorList = JSON.parse(localStorage["author-list"]);
    if (!authorList.includes(author)) {
      authorList.push(author);
    }
  }
  localStorage.setItem("author-list", JSON.stringify(authorList));
};

const addCategory = () => {
  let categoryList;
  let category = bookCategory.value;
  if (!localStorage["category-list"]) {
    categoryList = [];
    categoryList.push(category);
  } else {
    categoryList = JSON.parse(localStorage["category-list"]);
    if (!categoryList.includes(category)) {
      categoryList.push(category);
    }
  }
  localStorage.setItem("category-list", JSON.stringify(categoryList));
};

const addIndex = (itemsArray) => {
  itemsArray.forEach((item, index) => {
    item.id = index - 1 + 1;
    return item.id;
  });
};

newBookForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addBook();
  addAuthor();
  addCategory();
  bookFormSection.style = "display:none";
  location.reload();
});
