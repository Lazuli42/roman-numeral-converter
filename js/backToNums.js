$("#converter").submit(function(event) {
  event.preventDefault();
  $(".results").empty();

  var inputtedNum = $("input#arabicNum").val();
  var upperCase = inputtedNum.toUpperCase();
  var characters = upperCase.split("");
  console.log(characters);

  var arabicNumbers = [];

  var I = ["I", 1];
  var V = 5;
  var X = 10;
  var L = 50;
  var C = 100;
  var D = 500;
  var M = 1000;


    for (i=0; i<=characters.length; i++) {
      if ((characters[i] === "I") && (characters[i+1] === "V")) {
        arabicNumbers.push(4)
      }
      else if ((characters[i] === "I") && (characters[i+1] === "X")) {
        arabicNumbers.push(9)
      }
      else if (characters[i] === "I") {
        arabicNumbers.push(1);
      }
      else if (characters[i] === "V") {
        arabicNumbers.push(5)
      }
    }
  console.log(arabicNumbers);
  var total = arabicNumbers.join("+");
  console.log(total);
});
