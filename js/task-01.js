const listOfCategory = document.querySelector("#categories");
const listOfClassItems = listOfCategory.querySelectorAll(".item");
console.log(`Number of categories: ${listOfClassItems.length}`);

listOfClassItems.forEach((item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});