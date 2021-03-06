/* Fetch category API
	url : https://www.themealdb.com/api/json/v1/1/categories.php
*/
fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((response) => response.json())
  .then((data) => {
    let container = document.getElementById("list-category");

    let html = "";
    data.categories.forEach((d, index) => {
      html += `
	  	<div key=${index} class="category_item" onclick="handleOnclickItem('${d.strCategory}')">
		  		<b class="category_name">${d.strCategory}</b>
		  		<img class="item_img" src="${d.strCategoryThumb}" width="50px">
	  		<span class="description">${d.strCategoryDescription}</span>
	  		<hr>
		</div>
  		`;
    });
    container.innerHTML = html;
  });

/* Fetch meal by category API
	url : https://www.themealdb.com/api/json/v1/1/filter.php
	params: 
		- c : category name
*/

let handleOnclickItem = (key) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${key}`)
    .then((response) => response.json())
    .then((data) => {
      let container = document.getElementById("list-meal-by-category");
      let html = "";
      data.meals.forEach((d) => {
        html += `
				<div class="result_item">
          <img src="${d.strMealThumb}" class="image_filter">
          <span class="filter_product_name">${d.strMeal}</span>
				</div>
    		`;
      });
      container.innerHTML = html;
    });
};
