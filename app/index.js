const bookForm = document.querySelector(".new_book_form");
const addNewBookBtn = document.querySelector("#add_new_book");
const closFormBtn = document.querySelector("#close_btn");

addNewBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bookForm.style = "display:block";
});

closFormBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bookForm.style = "display: none";
});
