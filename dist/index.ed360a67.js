const deleteBook = (bookId)=>{
    const deletedBookAuthor = bookList[bookId].author;
    const deletedBookCategory = bookList[bookId].category;
    bookList.splice(bookId, 1);
    bookList.forEach((book, index)=>{
        book.id = index - 1 + 1;
        return book.id;
    });
    localStorage.setItem("book-list", JSON.stringify(bookList));
    lookForDeletedAuthor(deletedBookAuthor);
    lookForDeletedCategory(deletedBookCategory);
    location.reload();
};
const lookForDeletedAuthor = (bookAuthor)=>{
    const foundAuthor = bookList.find((book)=>book.author === bookAuthor);
    let index = authorListArray.indexOf(bookAuthor);
    if (!foundAuthor && index !== -1) {
        authorListArray.splice(index, 1);
        localStorage.setItem("author-list", JSON.stringify(authorListArray));
    }
};
const lookForDeletedCategory = (bookCategory)=>{
    const foundCategory = bookList.find((book)=>book.category === bookCategory);
    console.log(categoriesListArray.indexOf(bookCategory));
    let index = categoriesListArray.indexOf(bookCategory);
    if (!foundCategory && index !== -1) {
        categoriesListArray.splice(index, 1);
        localStorage.setItem("category-list", JSON.stringify(categoriesListArray));
    }
};

//# sourceMappingURL=index.ed360a67.js.map
