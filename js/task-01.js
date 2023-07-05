const paragrafEl = document.body.firstElementChild;
const categoriesListEl = paragrafEl.nextElementSibling;
const categoriesItemsEl = categoriesListEl.children;

console.log(`Number of categories: `, categoriesItemsEl.length);

for (const item of categoriesItemsEl) {
  console.log(`Category: `, item.firstElementChild.textContent);
  console.log(`Elements: `, item.lastElementChild.children.length);
}
