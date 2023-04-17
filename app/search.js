const searchInput = document.querySelector("#search_input");
const searchBtn = document.querySelector("#search_btn");

const searchForBook = () => {
  const searchValue = searchInput.value;
  booksContainer.innerHTML = "";
  bookList.forEach((book) => {
    if (
      book.author.includes(searchValue) ||
      book.title.includes(searchValue) ||
      book.category.includes(searchValue) ||
      book.year.includes(searchValue) ||
      book.price.includes(searchValue)
    ) {
      booksContainer.innerHTML += bookTemplate(book);
    }
  });
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchForBook();
});
