// Function to append value to result field
function appendToResult(value) {
    document.getElementById("result").value += value;
  }
  
  // Function to clear result field
function clearResult() {
    document.getElementById("result").value = "";
  }
  
  // Function to perform calculation
function calculate() {
    var expression = document.getElementById("result").value;
    var result = eval(expression);
    document.getElementById("result").value = result;
  }
  // Function to square the input value
function square() {
    var input = parseFloat(document.getElementById("result").value);
    var result = input * input;
    document.getElementById("result").value = result;
  }