//initialize order count
var orderCount = 0;

/* array of drink objects
   each object has an id key with a camelCase drink id value 
   and a label key with a value of the display text for the drink */

// loadMenu function to add the drinks from the array to the page

// submitOrder function that increments orderCount, gathers and displays order details.
var submitOrder = function() {
  orderCount++;
  var orderName = $("#order-form-input").val();
  console.log(orderName);
  var drinkName = $("input[type='radio']:checked").val();
  
  // only add the order if a name has been entered
  if (orderName) {
    // only add orders if there is room left on the order queue
    if (orderCount <= 5) {
      // add order display
      $("#order-details").append("<h1>" + orderName + " would like a " + drinkName + "</h1>");

      // call funciton to update drink order count
      updateOrderCount(orderCount);
    }
    else {
      alert('Drink order queue is full.  Please try ordering again in a few minutes.');
    }
  }
  else { // if orderName has no value trigger an alert
    alert('Oops! Please enter your name to order your drink.');
  }
};

// updateOrderCount function with a parameter passed to itf
var updateOrderCount = function(count) { 
  $('#drink-count').html("Drinks Ordered: " + count); 
}


$(document).ready(function() {
  // call loadMenu function

  $('#order-btn').click(function() {
    // call submitOrder function when order button is clicked
    submitOrder();
  });
});