$(document).ready(function() {

document.write('<h1>' + 'Fizzing and buzzing...' + '</h1>');

function fizzurNum(userNum) {

for (var fizbuzNum = 1; fizbuzNum <= userNum; fizbuzNum++) {
  if ((fizbuzNum % 3) + (fizbuzNum % 5) === 0) {
    document.write('<p>' + 'fizz buzz' + '</p>'); }
    else
      if ((fizbuzNum % 3) === 0) {
        document.write('<p>' + 'fizz' + '</p>'); }
        else
          if ((fizbuzNum % 5) === 0) {
            document.write('<p>' + 'buzz' + '</p>'); }
            else {
              document.write('<p>' + fizbuzNum + '</p>');
              }
  };
}
<<<<<<< HEAD
var userNum = prompt('Please enter whole number greater than zero.', 90);

if ((parseInt(userNum) % parseInt(userNum)) === 0) {
  document.write('You picked ' + (parseInt(userNum)) + '.<br>' + 'Here we go!<br>');
  fizzurNum(userNum);
  }
  else {
    document.write('Ooops. I need a number. One more try...');
    var userNum = prompt('Please enter whole number greater than zero.', 90);
    }
    document.write('<br>' + 'You\'re done.');
=======
var userNum = prompt('Please enter a whole number greater than zero.', 90);

while (isNaN(parseInt(userNum))) {
  document.write('Ooops. I need a whole number. Try again...' + '<br>');
  var userNum = prompt('Please enter a whole number greater than zero.', 90);
  }

  if ((parseInt(userNum) % parseInt(userNum)) === 0) {
        document.write('You picked ' + (parseInt(userNum)) + '.<br>' + 'Here we go!<br>');
        fizzurNum(userNum);
        document.write('<br>' + 'That\s it; we\'re all done.');
      };
>>>>>>> master
});
