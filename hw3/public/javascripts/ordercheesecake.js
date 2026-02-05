//Order cheesecake function

orderCheesecake = function(event) {
   if($('#notes').val().includes('vegan')) {
     alert('Warning! Cannot fulfill vegan request; cheesecakes contain dairy.')
   }
   else {
   $('#hide').hide()
   $('body').append("<p> Thank you! Your order has been placed. </p>")
   let toppings; //store which topping the user selected
   toppings = $("input[type='radio'][name='topping']:checked").val();
   if(toppings == null){ //default to plain cheesecake if unselected
      toppings = 'plain';
   }
   let quantity; //store which quantity the user selected
   quantity = $('#quantity').val();
   $('body').append("<p> Order Details: <br> " + quantity + "x " + toppings + " cheesecake </p>")
    //if not empty
    if($('#notes').val() != '' ){
      $('body').append("<p> Special Instructions: " + $('#notes').val() + " </p>")
    }
   }
}

$(document).ready(function(){
 $("button").click(orderCheesecake);
});
