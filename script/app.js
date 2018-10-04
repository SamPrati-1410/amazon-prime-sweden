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
        { name: 'Microwave Oven', price: 800, id: 10, description: 'Microwave Oven', picture: 'images/electronics2.jpeg', category: 'electronics' },
        { name: 'Toy 1', price: 8000, id: 11, description: 'Toddler ', picture: 'images/toys1.jpeg', category: 'toys' },
        { name: 'Toy 2', price: 12000, id: 12, description: 'LEGO Toddler Toys', picture: 'images/toys2.jpeg',category: 'toys' },
        { name: 'Toy 3', price: 3000, id: 13, description: 'Car', picture: 'images/toys3.jpeg', category: 'toys' },
        { name: 'Toy 4', price: 1200, id: 14, description: 'Games', picture: 'images/toys4.jpeg', category: 'toys' },
        { name: 'Toy 5', price: 1500, id: 15, description: 'Car with remote control', picture: 'images/toys1.jpeg', category: 'toys' },
        { name: 'Toy 6', price: 20000, id: 16, description: 'Toddler', picture: 'images/toys2.jpeg', category: 'toys' },
        { name: 'Toy 7', price: 25000, id: 17, description: 'LEGO Toddler Toys', picture: 'images/toys3.jpeg',category: 'toys' },
        { name: 'Toy 8', price: 18000, id: 18, description: 'Car', picture: 'images/toys4.jpeg', category: 'toys' },
        { name: 'Toy 9', price: 1500, id: 19, description: 'Games', picture: 'images/toys1.jpeg', category: 'toys' },
        { name: 'Toy 10', price: 800, id: 20, description: 'Car with remote control', picture: 'images/toys2.jpeg', category: 'toys' }
        ,
        { name: 'Kids cloths', price: 8000, id: 21, description: 'TV TV TV TV TV TV TV TV ', picture: 'images/cloths1.jpeg', category: 'cloths' },
        { name: 'Womens Clothes', price: 12000, id: 22, description: 'iPhone iPhone iPhone iPhone', picture: 'images/cloths2.jpeg',category: 'cloths' },
        { name: 'Womens Shirts', price: 3000, id: 23, description: 'Android Phone Android Phone Android Phone', picture: 'images/cloths3.jpeg', category: 'cloths' },
        { name: 'Dress for Girls', price: 1200, id: 24, description: 'Watch Watch Watch Watch', picture: 'images/cloths4.jpeg', category: 'cloths' },
        { name: 'Kids cloths', price: 1500, id: 25, description: 'Laptop Laptop Laptop Laptop', picture: 'images/cloths1.jpeg', category: 'cloths' },
        { name: 'Womens Clothes', price: 20000, id: 26, description: 'Washing Machine Washing Machine', picture: 'images/cloths2.jpeg', category: 'cloths' },
        { name: 'Womens Shirts', price: 25000, id: 27, description: 'Regrigerator Regrigerator', picture: 'images/cloths3.jpeg',category: 'cloths' },
        { name: 'Dress for Girls', price: 18000, id: 28, description: 'Dish Washer Dish Washer', picture: 'images/cloths4.jpeg', category: 'cloths' },
        { name: 'Kids cloths', price: 1500, id: 29, description: 'Music System Music System', picture: 'images/cloths1.jpeg', category: 'cloths' },
        { name: 'Toy 10', price: 800, id: 30, description: 'Microwave Oven', picture: 'images/cloths2.jpeg', category: 'cloths' }
        ,
        { name: 'Sports 1', price: 8000, id: 31, description: 'Sports 1 ', picture: 'images/sports1.jpeg', category: 'sports' },
        { name: 'Sports 2', price: 12000, id: 32, description: 'iPhone iPhone iPhone iPhone', picture: 'images/sports2.jpeg',category: 'sports' },
        { name: 'Sports 3', price: 3000, id: 33, description: 'Android Phone Android Phone Android Phone', picture: 'images/sports3.jpeg', category: 'sports' },
        { name: 'Sports 4', price: 1200, id: 34, description: 'Watch Watch Watch Watch', picture: 'images/sports4.jpeg', category: 'sports' }
    ];
var myCart = [];

$('.invisible12').on('click',function(e){
    alert($('.invisible12').val());
});
var filteredArray = product_list_array.filter(function(fil){
   
    return fil.category ===$('.invisible12').val();
});
console.log(filteredArray);
    var displayItems = filteredArray.map(function(values){
       
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
//alert(eee.currentTarget.id);
console.log(myCart);
$(eee.currentTarget).closest('span').remove();
myCart.splice(eee.currentTarget,1);
console.log(myCart);
})
});