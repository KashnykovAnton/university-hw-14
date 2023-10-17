const categories = document.querySelectorAll('.item')

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => { 
    console.dir(`Category: ${category.firstElementChild.textContent}`);
    console.dir(`Elements: ${category.lastElementChild.children.length}`);
})