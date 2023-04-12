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
addNewBookBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    bookFormSection.style = "display:block";
});
closFormBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    bookFormSection.style = "display: none";
});
const addBook = ()=>{
    let bookList;
    let book = {
        title: bookTitlte.value,
        author: bookAuthor.value,
        category: bookCategory.value,
        year: bookYear.value,
        price: bookPrice.value,
        image: bookImage.value
    };
    if (!localStorage["book-list"]) bookList = [];
    else bookList = JSON.parse(localStorage["book-list"]);
    if (!(bookList instanceof Array)) bookList = [];
    bookList.push(book);
    addIndex(bookList);
    console.log(book);
    localStorage.setItem("book-list", JSON.stringify(bookList));
    return bookList;
};
const addIndex = (itemsArray)=>{
    itemsArray.forEach((item, index)=>{
        item.id = index - 1 + 1;
        return item.id;
    });
};
newBookForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    addBook();
});

//# sourceMappingURL=index.ce4d0d14.js.map
