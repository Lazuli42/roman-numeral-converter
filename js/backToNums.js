$("#converter").submit(function(event) {
  event.preventDefault();
  $(".results").empty();

  var inputtedNum = $("input#arabicNum").val();
  var upperCase = inputtedNum.toUpperCase();
  var characters = upperCase.split("");
  console.log(characters);

  var arabicNumbers = [];

  var total = 0;

  var arabicConverter = function(romNum1, romNum2, romNum3, num1, num4, num5, num9) {
    for (i=0; i<=characters.length; i++) {
      if ((characters[i] === romNum1) && (characters[i+1] === romNum2)) {
        arabicNumbers.push(num4)
      }
      else if ((characters[i] === romNum1) && (characters[i+1] === romNum3)) {
        arabicNumbers.push(num9)
      }
      else if (characters[i] === romNum1) {
        arabicNumbers.push(num1);
      }
      else if ((characters[i] === romNum2) && (characters[i-1] != romNum1)) {
        arabicNumbers.push(num5)
      }
    }
  }
  arabicConverter("M", "", "", 1000, "", "", "")
  arabicConverter("C", "D", "M", 100, 400, 500, 900);
  arabicConverter("X", "L", "C", 10, 40, 50, 90);
  arabicConverter("I", "V", "X", 1, 4, 5, 9);

  console.log(arabicNumbers);

  for (i=0; i<=arabicNumbers.length; i++) {
    total += arabicNumbers[i] << 0;

  }

  console.log(total);
});
