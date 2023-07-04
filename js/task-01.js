const titlesCategoriesEl = document.querySelectorAll("#categories h2");

console.log("Number of categories:", titlesCategoriesEl.length);

const itemsCategoriesListEl = document.querySelectorAll("#categories .item");

itemsCategoriesListEl.forEach((category) => {
  const titleCategoryEl = category.querySelector("h2");
  const categoryListEl = category.querySelectorAll("ul li");

  console.log(`Category:`, titleCategoryEl.textContent);
  console.log(`Elements:`, categoryListEl.length);
});
