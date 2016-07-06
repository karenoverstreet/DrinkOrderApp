//initialize order count
var orderCount = 0;

/* array of drink objects
   each object has an id key with a camelCase drink id value 
   and a label key with a value of the display text for the drink */
var cocktails = [
  {
    'id': 'focusedLady',
    'label': 'Focused Lady'
  },
  {
    'id': 'strongLady',
    'label': 'Strong Lady'
  },
  {
    'id': 'frontEndPunch',
    'label': 'Front-End Punch'
  },
  {
    'id': 'cachedOut',
    'label': 'Cached Out'
  },
  {
    'id': 'httPapaya',
    'label': 'httPAPAYA://'
  },
  {
    'id': 'nerdyDaiquiri',
    'label': 'Nerdy Daiquiri'
  },
  {
    'id': 'theAvernaCode',
    'label': 'The Averna Code'
  },
  {
    'id': 'focusedTheMostest',
    'label': 'Focused the Mostest'
  },
];

// loadMenu function to add the drinks from the array to the page
var loadMenu = function() {
  for (var i = 0; i < cocktails.length; i++) {
    $('.radio-group').append(
      '<label class="radio" for="' + cocktails[i].id + '"><input type="radio" id="' + cocktails[i].id + '" name="drink" value="' + cocktails[i].label + '">' + cocktails[i].label + '</label>'
    );
  }
};

// submitOrder function that increments orderCount, gathers and displays order details.
var submitOrder = function() {
  orderCount++;
  var orderName = $("#order-form-input").val();
  console.log(orderName);
  var drinkName = $("input[type='radio']:checked").val();
  
  // only add the order if a name has been entered
    
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
};

// updateOrderCount function with a parameter passed to itf
var updateOrderCount = function(count) { 
  $('#drink-count').html("Drinks Ordered: " + count); 
}


$(document).ready(function() {
  // call loadMenu function
  loadMenu();

  $('#order-btn').click(function() {
    // call submitOrder function when order button is clicked
    submitOrder();
  });
});