$("#converter").submit(function(event) {
  event.preventDefault();
  $(".results").empty();
  var inputtedNum = $("input#arabicNum").val()
  var value = parseInt(inputtedNum);

  var digits = inputtedNum.split("")
  console.log(digits)

  var thousand = parseInt(digits[digits.length - 4]);
  var hundred = parseInt(digits[digits.length - 3]);
  var ten = parseInt(digits[digits.length - 2]);
  var one = parseInt(digits[digits.length - 1]);

  if (value >= 4000) {
    alert("You cannot convert numbers higher than 3,999.")
  }
  else {
    if (thousand <= 3) {
      for (i=1; i<=(thousand); i++) {
      $('.results').append("M") }
    }

    if (hundred <= 3) {
      for (i=1; i<=(hundred); i++) {
      $('.results').append("C")
      }
    }
    else if (hundred === 4) {
      $('.results').append("CD")
    }
    else if (hundred >= 5) {
      if (hundred === 5) {
        $('.results').append("D")
      }

      else if ((hundred >= 5) && (hundred != 9)) {
        $('.results').append("D")
        for (i=6; i<=(hundred); i++) {
          $('.results').append("C")
        }
      }
      else {
          $('.results').append("CM")
      }
    }

    if (ten <= 3) {
      for (i=1; i<=ten; i++) {
      $('.results').append("X") }

    }
    else if (ten === 4) {
      $('.results').append("XL")
    }
    else if (ten >= 5) {
      if (ten === 5) {
        $('.results').append("L")
      }

      else if ((ten >= 5) && (ten != 9)) {
        $('.results').append("L")
        for (i=6; i<=ten; i++) {
          $('.results').append("X")
        }
      }
      else {
          $('.results').append("XC")
      }
    }


    if (one <= 3) {
      for (i=1; i<=one; i++) {
      $('.results').append("I") }

    } else if (one === 4) {
      $('.results').append("IV")

    } else if (one >= 5) {
      if (one === 5) {
        $('.results').append("V")
      }
      else if ((one >= 5) && (one != 9)) {
        $('.results').append("V")
        for (i=6; i<=one; i++) {
          $('.results').append("I") }
        }
        else {
          $('.results').append("IX")
        }
      }
    }
  })
