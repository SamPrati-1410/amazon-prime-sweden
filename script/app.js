$(function () {
    var product_list_array = [
        { name: 'TV', price: 8000, id: 1, description: 'TV TV TV TV TV TV TV TV ', picture: 'images/electronics1.jpeg', category: 'electronics' },
        { name: 'iPhone', price: 12000, id: 2, description: 'iPhone iPhone iPhone iPhone', picture: 'images/electronics2.jpeg',category: 'electronics' },
        { name: 'Android Phone', price: 3000, id: 3, description: 'Android Phone Android Phone Android Phone', picture: 'images/electronics3.jpeg', category: 'electronics' },
        { name: 'Watch', price: 1200, id: 4, description: 'Watch Watch Watch Watch', picture: 'images/electronics4.jpeg', category: 'electronics' },
        { name: 'Laptop', price: 1500, id: 5, description: 'Laptop Laptop Laptop Laptop', picture: 'images/electronics1.jpeg', category: 'electronics' },
        { name: 'Washing Machine', price: 20000, id: 6, description: 'Washing Machine Washing Machine', picture: 'images/electronics2.jpeg', category: 'electronics' },
        { name: 'Regrigerator', price: 25000, id: 7, description: 'Regrigerator Regrigerator', picture: 'images/electronics3.jpeg',category: 'electronics' },
        { name: 'Dish Washer', price: 18000, id: 8, description: 'Dish Washer Dish Washer', picture: 'images/electronics4.jpeg', category: 'electronics' },
        { name: 'Music System', price: 1500, id: 9, description: 'Music System Music System', picture: 'images/electronics1.jpeg', category: 'electronics' },
        { name: 'Microwave Oven', price: 800, id: 10, description: 'Microwave Oven', picture: 'images/electronics2.jpeg', category: 'electronics' }
    ];
var myCart = [];

    var displayItems = product_list_array.map(function(values){
    return `<div class="col-3">
    <h2>${values.name}</h2>
       <img src="${values.picture}" alt="">
    <h4>${values.price}</h4>
    <p>${values.description}</p>
    <button type="button" id="${values.id}">Add to Cart</button>
   </div>`
} )
$('#display').html(displayItems);

$('#addToCart').on('click', 'button', function (event) {
    var found = product_list_array.find(function(values) {
        return values.id == event.currentTarget.id; 
        });
        
    myCart.push(found);
   
    var butt = `<span>Name : ${found.name} <button type="button" class='pr' id='${found.id}'>Del</button><br>`;
    $('#cart-prati').append(butt);
    //$('.cart-prati').html("<button id=''>Del</button>");
   
});
$('#cart-prati').on('click', 'button',function(eee){
alert(eee.currentTarget.id);
console.log(myCart);
$(eee.currentTarget).closest('span').remove();
myCart.splice(eee.currentTarget,1);
console.log(myCart);
})
});