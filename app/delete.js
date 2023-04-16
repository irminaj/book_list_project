const deleteBook = (bookId) => {
  bookList.splice(bookId, 1);
  bookList.forEach((book, index) => {
    book.id = index - 1 + 1;
    return book.id;
  });
  localStorage.setItem("book-list", JSON.stringify(bookList));
  location.reload();
};
