<!DOCTYPE html>
<html>
<head>
<script>
// Delete local storage
// - localStorage.remove('key');
//   + Where 'key' is the key of the value you want to remove. 
// - localStorage.clear() method.
//   + Clear all settings
function clickCounter() {
    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            // The value string is converted to a number to 
            // be able to increase the counter.
            localStorage.clickcount = Number(localStorage.clickcount)+1;
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = 
           "You have clicked the button " 
           + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = 
           "Sorry, your browser does not support web storage...";
    }
}
</script>
</head>
<body>
<p><button onclick="clickCounter()" type="button">Click me!</button></p>
<div id="result"></div>
<p>Click the button to see the counter increase.</p>
<p>Close the browser tab (or window), and try again, and 
the counter will continue to count (is not reset).</p>
</body>
</html>