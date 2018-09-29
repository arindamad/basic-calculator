var calVal = "";
var operation = "";
$('button.operation').on('click', function() {
  operation = $(this).val();console.log("opeartion", operation);
});
$('button').on('click', function () {
  if ($(this).val() != '=') {
    var numVal = $(this).val();
    calVal += numVal;
    $('.rasult').text(calVal);
    console.log(calVal);
  } else {alert("x");
    if(operation != '') {
      switch(operation) {
        case '+':
          var calValSplited = calVal.split('+');
          calVal = parseInt(calValSplited[0]) + parseInt(calValSplited[1]);
          $('.rasult').text(calVal);
        break;
        case '-':
          var calValSplited = calVal.split('-');
          calVal = parseInt(calValSplited[0]) - parseInt(calValSplited[1]);
          $('.rasult').text(calVal);
        break;
        case '*':
          var calValSplited = calVal.split('*');
          calVal = parseInt(calValSplited[0]) * parseInt(calValSplited[1]);
          $('.rasult').text(calVal);
        break;
        case '/':
          var calValSplited = calVal.split('/');
          calVal = parseInt(calValSplited[0]) / parseInt(calValSplited[1]);
          $('.rasult').text(calVal);
        break;

      }
    }
  }

});
