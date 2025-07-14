const menuItems = [ 
   {
      id: 1,
      title:"buttermilk pancakes",
      category : "breakfast",
      price: 15.99,
      img: "images/item-1.jpeg",
      detail : "Crispy maple pancakes stacked tall with syrup and cream, served with seasonal fruits beside the plate.",
   },
   {
      id : 2,
      title: "dinner double",
      category : "lunch",
      price : 13.99,
      img : "images/item-3.jpeg",
      detail : "Thick beef patties layered with cheese, grilled onions, fresh lettuce, and homemade toasted buns combo.",
   },
   {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "images/item-4.jpeg",
      detail: `Thick creamy vanilla milkshake blended with cookies, whipped topping and chocolate drizzle, ice cold.`,
   },
   {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "images/item-5.jpeg",
      detail: `Fluffy scrambled eggs, crispy bacon, buttered toast, fruit salad, and fresh juice on the side.`,
   },
   {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "images/item-5.jpeg",
      detail: `Loaded fried eggs with cheese, tomato, avocado, pickles, onion, and toasted sandwich slices for serving.`,
   },
   {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "images/item-6.jpeg",
      detail: `Blended Oreo cookies, ice cream, whipped cream topping, chocolate syrup drizzle and a cherry above.`,
   },
   {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "images/item-7.jpeg",
      detail: `Crispy bacon piled high with melted cheddar, toasted buns, lettuce, tomato, and spicy chipotle mayo.`,
   },
   {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "images/item-8.jpeg",
      detail: `Classic cheeseburger with fries, cola, side salad, toasted sesame bun and creamy ranch dipping sauce.`,
   },
   {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "images/item-9.jpeg",
      detail: `Peanut butter banana smoothie with protein, almond milk, chia seeds, oats and vanilla ice cream blended.`,
   },
   {
      id: 10,
      title: "steak",
      category: "Dinner",
      price: 30.99,
      img: "images/item-10.jpeg",
      detail: `Juicy grilled sirloin steak seasoned with herbs, mashed potatoes, buttered corn and rosemary garlic sauce.`,
   },
];

const section = document.querySelector(".items-container");

function display(menuArray){
   let displayMenu = menuArray.map(function(item){
      return `<article class="item">
      <div>
         <img src=${item.img}>
      </div>
      <div>
         <header class="item-info">
           <p class="item-name"> ${item.title} </p>
           <p class="price" style="color: red;">$${item.price}</p>
         </header>
         <p class="item-detail"> ${item.detail}</p>
      </div>
   </article>`;
   });
   displayMenu = displayMenu.join("");
   section.innerHTML = displayMenu;
}
window.addEventListener("DOMContentLoaded", function(){
   display(menuItems);
});
const filterbtn = document.querySelectorAll(".button-section button");
filterbtn.forEach(function(btn){
   btn.addEventListener("click", function(e){
      const filters = e.currentTarget.id.toLowerCase();
      const categorys = menuItems.filter(function(item){
         if(filters === "all"){
            return true;
         }
         else{
            return item.category.toLowerCase() === filters;
         }
      });
      display(categorys);
   });
});
