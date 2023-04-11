const bookForm = document.querySelector(".new_book_form");
const addNewBookBtn = document.querySelector("#add_new_book");

addNewBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  bookForm.style = "display:block";
});
