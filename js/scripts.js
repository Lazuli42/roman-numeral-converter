$("#converter").submit(function(event) {
  event.preventDefault();

  var inputtedNum = $("input#arabicNum").val()

  var digits = inputtedNum.split("")
  console.log(digits)

  // var digit = parseInt(digits)

  for (i=1; i<=(digits[digits.length - 1]); i++) {
    if (parseInt(digits[digits.length - 1]) <= 3) {
      $('.results').append("I")
    }
  }
});
