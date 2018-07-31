let myH1=$('#test');
console.log(myH1);
$('h1').css('color', 'blue');
$('.red-div').css('color', 'red');
$('ul li:nth-Child(1)').css('color', 'green');
$('ul li:nth-Child(2)').css('color', 'pink');
$('#brown-div').css('color', 'brown');
$('#first-button').click(function(){
    alert($('#my-input').val())
}); 
$('#second-button').click(function(){
   $('.students').append($('<li>').text($('#student-input').val()));
})
