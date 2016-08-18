$("#converter").submit(function(event) {
  event.preventDefault();
  $(".results").empty();
  var inputtedNum = $("input#arabicNum").val()

  var digits = inputtedNum.split("")
  console.log(digits)

  // var digit = parseInt(digits)
  if (digits.length > 4) {
    alert("You cannot convert numbers higher than 3,999.")
  }
  else {
    if (parseInt(digits[digits.length - 4]) <= 3) {
      for (i=1; i<=(digits[digits.length - 4]); i++) {
      $('.results').append("M") }
    }
    else if (parseInt(digits[digits.length - 4]) > 3) {
      alert("You cannot convert numbers higher than 3,999.")
    }

    // else {
    //   alert("Please enter a number.")
    // }

      if (parseInt(digits[digits.length - 3]) <= 3) {
        for (i=1; i<=(digits[digits.length - 3]); i++) {
        $('.results').append("C") }

      }
      else if (parseInt(digits[digits.length - 3]) === 4) {
        $('.results').append("CD")
      }
      else if (parseInt(digits[digits.length - 3]) >= 5) {
        if (parseInt(digits[digits.length - 3]) === 5) {
          $('.results').append("D")
        }

        else if ((parseInt(digits[digits.length - 3]) >= 5) && (parseInt(digits[digits.length - 3]) != 9)) {
          $('.results').append("D")
          for (i=6; i<=(digits[digits.length - 3]); i++) {
            $('.results').append("C")
          }
        }
        else {
            $('.results').append("CM")
        }
      }


      if (parseInt(digits[digits.length - 2]) <= 3) {
        for (i=1; i<=(digits[digits.length - 2]); i++) {
        $('.results').append("X") }

      }
      else if (parseInt(digits[digits.length - 2]) === 4) {
        $('.results').append("XL")
      }
      else if (parseInt(digits[digits.length - 2]) >= 5) {
        if (parseInt(digits[digits.length - 2]) === 5) {
          $('.results').append("L")
        }

        else if ((parseInt(digits[digits.length - 2]) >= 5) && (parseInt(digits[digits.length - 2]) != 9)) {
          $('.results').append("L")
          for (i=6; i<=(digits[digits.length - 2]); i++) {
            $('.results').append("X")
          }
        }
        else {
            $('.results').append("XC")
        }
      }


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
    }
  })
