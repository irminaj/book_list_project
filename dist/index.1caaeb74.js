const authorList = document.querySelector("#authors_list");
const categoriesList = document.querySelector("#categories_list");
const authorListArray = JSON.parse(localStorage.getItem("author-list"));
const categoriesListArray = JSON.parse(localStorage.getItem("category-list"));
const authorListTemplate = (author)=>{
    return `
  <a>${author}</a>`;
};
const showAuthorList = ()=>{
    authorListArray.forEach((author)=>{
        console.log(author);
        authorList.innerHTML += authorListTemplate(author);
    });
};
const categoryListTemplate = (category)=>{
    return `
  <a>${category}</a>`;
};
const showCategoriesList = ()=>{
    categoriesListArray.forEach((category)=>{
        console.log(category);
        categoriesList.innerHTML += categoryListTemplate(category);
    });
};

//# sourceMappingURL=index.1caaeb74.js.map
