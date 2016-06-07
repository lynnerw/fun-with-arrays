$(document).ready(function() {

var fizbuzNum = 0;
  console.log(fizbuzNum);

for (var fizbuzNum = 1; fizbuzNum < 21; fizbuzNum++) {
  if ((fizbuzNum % 3) === 0) {
    document.write("<p>" + "fizz" +"</p>"); }
    else
      if ((fizbuzNum % 5) === 0) {
        document.write("<p>" + "buzz" +"</p>"); }
        else
          if ((fizbuzNum % 3) + (fizbuzNum % 5) === 0) {
            document.write("<p>" + "fizz buzz" +"</p>"); }
            else {
      document.write("<p>" + fizbuzNum + "</p>");
    }
};
});
