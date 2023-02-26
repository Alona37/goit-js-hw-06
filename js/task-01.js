// Задание 1
// В HTML есть список категорий ul#categories.
// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
// Для выполнения этой задачи нужно использовать метод forEach() и свойства навигации по DOM.

// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const itemsEl = document.querySelectorAll(".item");

console.log("Number of categories: ", itemsEl.length);

itemsEl.forEach(itemEl => {
	let itemsElTitle = itemEl.querySelector("h2").textContent;

	let oneItemsElTitle = itemEl.querySelectorAll("li");
	let oneItemsElTitleQty = oneItemsElTitle.length;

	console.log("Category: ", itemsElTitle);
	console.log("Elements: ", oneItemsElTitleQty);
});
