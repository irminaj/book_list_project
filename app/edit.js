const editBookBtn = document.querySelector("#edit_book_btn");

const editBook = (bookId) => {
  bookFormSection.style = "display:block";
  addBookBtn.style = "display:none";
  editBookBtn.style = "display:block";
  editBookBtn.setAttribute("id", bookId);
  bookTitlte.value = bookList[bookId].title;
  bookAuthor.value = bookList[bookId].author;
  bookCategory.value = bookList[bookId].category;
  bookYear.value = bookList[bookId].year;
  bookPrice.value = bookList[bookId].price;
  bookImage.value = bookList[bookId].image;
};

editBookBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const index = +editBookBtn.getAttribute("id");
  console.log(typeof index);
  const editedBook = {
    title: bookTitlte.value,
    author: bookAuthor.value,
    category: bookCategory.value,
    year: bookYear.value,
    price: bookPrice.value,
    image: bookImage.value,
    id: index,
  };
  console.log(editedBook);
  bookList.splice(index, 1, editedBook);
  localStorage.setItem("book-list", JSON.stringify(bookList));
  location.reload();
});
