$("#converter").submit(function(event) {
  event.preventDefault();

  var inputtedNum = $("input#arabicNum").val()

  var digits = inputtedNum.split("")
  console.log(digits)

  // var digit = parseInt(digits)


  if (parseInt(digits[digits.length - 1]) <= 3) {
    for (i=1; i<=(digits[digits.length - 1]); i++) {
    $('.results').append("I") }

  } else if (parseInt(digits[digits.length - 1]) === 4) {
    $('.results').append("IV")

  } else if (parseInt(digits[digits.length - 1]) >= 5) {
    if (parseInt(digits[digits.length - 1]) === 5) {
      $('.results').append("V")
    }

    else if ((parseInt(digits[digits.length - 1]) >= 5) && (parseInt(digits[digits.length - 1]) != 9)) {
      $('.results').append("V")
      for (i=6; i<=(digits[digits.length - 1]); i++) {
        $('.results').append("I") }
      }
      else {
        $('.results').append("IX")
      }
    }
  })
