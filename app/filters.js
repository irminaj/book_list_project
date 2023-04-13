const authorList = document.querySelector("#authors_list");
const categoriesList = document.querySelector("#categories_list");
const authorListArray = JSON.parse(localStorage.getItem("author-list"));
const categoriesListArray = JSON.parse(localStorage.getItem("category-list"));

const authorListTemplate = (author) => {
  return (
    `
  <a onclick="filterAuthor(\`` +
    author +
    `\`)">${author}</a>`
  );
};

const showAuthorList = () => {
  authorListArray.forEach((author) => {
    console.log(author);
    authorList.innerHTML += authorListTemplate(author);
  });
};

const categoryListTemplate = (category) => {
  return (
    `
  <a onclick="filterCategory(\`` +
    category +
    `\`)">${category}</a>`
  );
};

const showCategoriesList = () => {
  categoriesListArray.forEach((category) => {
    console.log(category);
    categoriesList.innerHTML += categoryListTemplate(category);
  });
};

const filterAuthor = (bookAuthor) => {
  booksContainer.innerHTML = "";
  bookList.map((book) => {
    if (book.author === bookAuthor) {
      booksContainer.innerHTML += bookTemplate(book);
    }
  });
};

const filterCategory = (bookCategory) => {
  booksContainer.innerHTML = "";
  bookList.map((book) => {
    if (book.category === bookCategory) {
      booksContainer.innerHTML += bookTemplate(book);
    }
  });
};
