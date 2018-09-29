var calVal="";
$('button').on('click', function(){
  var numVal=$(this).val();
  calVal+=numVal;
  $('.rasult').text(calVal);
  console.log(calVal);
});
