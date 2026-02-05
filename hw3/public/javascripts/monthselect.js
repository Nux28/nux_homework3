//Month select function

//Because of how i coded this, I'm not sure how to turn it into a separate helper method and event handler.

//month select
$('#dropdown').hide()
$("#selected-month").mouseenter(function(){
  $('#dropdown').show()
});
$("#dropdown").mouseenter(function(){
  $('#dropdown').show()
});
$("#selected-month").mouseleave(function(){
  $('#dropdown').hide()
});
$("#dropdown").mouseleave(function(){
  $('#dropdown').hide()
});

let month; //the selected month from the dropdown
$('#selectable-months').click(function(){
$('#selected-month').text(month)
});

//i know this is horribly inefficient but im so tired
$('#jan').click(function(){
  month = $(this).text()
});
$('#feb').click(function(){
  month = $(this).text()
});
$('#mar').click(function(){
  month = $(this).text()
});
$('#apr').click(function(){
  month = $(this).text()
});
$('#may').click(function(){
  month = $(this).text()
});
$('#jun').click(function(){
  month = $(this).text()
});
$('#jul').click(function(){
  month = $(this).text()
});
$('#aug').click(function(){
  month = $(this).text()
});
$('#sep').click(function(){
  month = $(this).text()
});
$('#oct').click(function(){
  month = $(this).text()
});
$('#nov').click(function(){
  month = $(this).text()
});
$('#dec').click(function(){
  month = $(this).text()
});