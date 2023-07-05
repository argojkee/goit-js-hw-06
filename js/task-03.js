const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListEl = document.querySelector(".gallery");
galleryListEl.style.listStyle = "none";
galleryListEl.style.display = "flex";
galleryListEl.style.flexDirection = "column";
galleryListEl.style.rowGap = "40px";
galleryListEl.style.alignItems = "center";
galleryListEl.style.paddingLeft = 0;
galleryListEl.style.margin = "0px auto";

// For of

// let fullItemsEl = "";
// for (const { url, alt } of images) {
//   fullItemsEl += `<li><img src="${url}" alt="${alt}" width='200' height='200'</li>`;
// }

// galleryListEl.insertAdjacentHTML("beforeend", fullItemsEl);

const makeItemMarkup = ({ alt, url }) =>
  `<li><img src='${url}' alt='${alt}' width='300' </li>`;

const arrayItemsEl = images.map(makeItemMarkup);
galleryListEl.insertAdjacentHTML("beforeend", arrayItemsEl.join(""));
