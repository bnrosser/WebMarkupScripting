// JavaScript code for form validation
// Prevent form from submitting
document.getElementById('myForm').addEventListener('submit', function (event) 
{ 
let regex = /^[a-zA-Z0-9]+$/;
let inputField = document.getElementById('inputField').value; 
if (inputField === '') { alert('Enter a Value!'); event.preventDefault(); }
else if (regex.test(inputField)) { event.preventDefault(); }



});


// Regular expression pattern for alphanumeric input
// Check if the input value matches the pattern
// Valid input: display confirmation and submit the form
// Invalid input: display error message
function isAlpnum(inputElement, event) {
    let regex = /^[a-zA-Z0-9]+$/;
    if (!regex.test(inputElement)) { alert('Invalid format!'); }
    else if (regex.test(inputElement)) { alert('Valid format! Form Submitted!'); }
}

var btn = document.getElementById("myButton"); btn.addEventListener("click", function () {
    // Retrieve the input field value
    var inputElement = document.getElementById('inputField'); var inputValue = inputElement.value; console.log(inputValue);
    isAlpnum(inputElement.value);
});


