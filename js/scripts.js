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

  var numberConverter = function(digit, romNum1, romNum2, romNum3) {
    if (digit <= 3) {
      for (i=1; i<=digit; i++) {
      $('.results').append(romNum1) }

    } else if (digit === 4) {
      $('.results').append(romNum1 + romNum2)

    } else if (digit >= 5) {
      if (digit === 5) {
        $('.results').append(romNum2)
      }
      else if ((digit >= 5) && (digit != 9)) {
        $('.results').append(romNum2)
        for (i=6; i<=digit; i++) {
          $('.results').append(romNum1) }
        }
        else {
          $('.results').append(romNum1 + romNum3)
        }
      }
    }

    numberConverter(hundred, "C", "D", "M");
    numberConverter(ten, "X", "L", "C");
    numberConverter(one, "I", "V", "X");

  }
})
