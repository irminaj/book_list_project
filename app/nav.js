const toggleBtn = document.querySelector("#toggle_btn");
const menuWrapper = document.querySelector(".menu_wrapper");
const filterNav = document.querySelector(".filter_nav");
const searchNav = document.querySelector(".search_nav");

toggleBtn.addEventListener("click", () => {
  menuWrapper.classList.toggle("active");
});
