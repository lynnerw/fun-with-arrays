$(document).ready(function() {

document.write("<h1>" + "Fizzing and buzzing..." + "</h1>");

for (var fizbuzNum = 1; fizbuzNum < 101; fizbuzNum++) {
  if ((fizbuzNum % 3) + (fizbuzNum % 5) === 0) {
    document.write("<p>" + "fizz buzz" + "</p>"); }
    else
      if ((fizbuzNum % 3) === 0) {
        document.write("<p>" + "fizz" + "</p>"); }
        else
          if ((fizbuzNum % 5) === 0) {
            document.write("<p>" + "buzz" + "</p>"); }
            else {
              document.write("<p>" + fizbuzNum + "</p>");
              }
};

});
