$(document).ready(function() {

  document.write('<h1>' + 'Fizzing and buzzing...' + '</h1>');

  function fizzurNum(userNum) {
    for (var fizbuzNum = 1; fizbuzNum <= userNum; fizbuzNum++) {
      if ((fizbuzNum % 3) + (fizbuzNum % 5) === 0) {
        document.write('<p>' + 'fizz buzz' + '</p>');
      } else {
        if ((fizbuzNum % 3) === 0) {
          document.write('<p>' + 'fizz' + '</p>');
        } else {
          if ((fizbuzNum % 5) === 0) {
            document.write('<p>' + 'buzz' + '</p>');
          } else {
            document.write('<p>' + fizbuzNum + '</p>');
          }
        }
      }
    }
  }

  var userNum = prompt('Please enter a whole number greater than zero.', 90);

  while (isNaN(parseInt(userNum))) {
    document.write('Ooops. I need a whole number. Try again...' + '<br>');
    userNum = prompt('Please enter a whole number greater than zero.', 90);
  }

  var intUserNum = parseInt(userNum);

  document.write('You picked ' + intUserNum + '.<br>' + 'Here we go!<br>');
  fizzurNum(intUserNum);
  document.write('<br>' + 'That\s it; we\'re all done.');

});
