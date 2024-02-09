// JavaScript code goes here
document.addEventListener("DOMContentLoaded", function () {
  // get whatever is on the screen
  let resultField = document.getElementById("screen");
  // initialise everything
  //Initialised variables to store the current input, the operator being used and the previous input.
  let currentInput = "";
  let operator = "";
  let prevInput = "";

  // start capturing what buttons are being pressed by appending the value of each one to
  // the previous one. This resulting string will be displayed on the screen
  function appendToResult(value) {
    console.log(value);
    //Appending the operators to the value so they show on the screen.
    currentInput += value;
    resultField.value = currentInput;
  }

  function clearResult() {
    // initialise variables so ready for a new calculation
    currentInput = "";
    operator = "";
    prevInput = "";
    resultField.value = "";
  }

  // Function to perform calculations based on the operator
  function calculate(newOperator) {
    if (currentInput === "" && prevInput === "") return; // Checks if currentInput and previousInput are empty (this is the first operation)

    if (operator === "") {
      //User first enters a number and an operator. This statement allows the calculator to keep track of the input.
      prevInput = currentInput;
      currentInput = "";
      operator = newOperator;
    } else if (currentInput === "" && newOperator === "=") {
      // User presses = to get the result.
      currentInput = prevInput; // Setting currentInput to prevInput in order to perform further calculations.
      prevInput = eval(prevInput + operator + currentInput).toString();
      operator = "";
      resultField.value = prevInput;
    } else {
      // User chains multiple operations together.
      prevInput = eval(prevInput + operator + currentInput).toString(); // Evaluates the expression and updates prevInput with the calculated result.
      currentInput = ""; // Clears current input.
      operator = newOperator; // Updates the operator.
      resultField.value = prevInput; // Displays the result.
    }
  }

  // Function to calculate the percentage
  function calculatePercentage() {
    if (currentInput !== "") {
      // Check if there's something on the calculator screen
      const currentValue = parseFloat(currentInput); // Convert the input to a numerical value
      const percentageValue = currentValue / 100; // Calculate the percentage (divide by 100)
      currentInput = percentageValue.toString(); // Convert the percentage result to a string
      resultField.value = currentInput; // Update the calculator screen with the percentage result
    }
  }

  // Event listeners for numeric buttons (1-9) and 0
  document.getElementById("one").addEventListener("click", function () {
    appendToResult("1");
  });
  document.getElementById("two").addEventListener("click", function () {
    appendToResult("2");
  });
  document.getElementById("three").addEventListener("click", function () {
    appendToResult("3");
  });
  document.getElementById("four").addEventListener("click", function () {
    appendToResult("4");
  });
  document.getElementById("five").addEventListener("click", function () {
    appendToResult("5");
  });
  document.getElementById("six").addEventListener("click", function () {
    appendToResult("6");
  });
  document.getElementById("seven").addEventListener("click", function () {
    appendToResult("7");
  });
  document.getElementById("eight").addEventListener("click", function () {
    appendToResult("8");
  });
  document.getElementById("nine").addEventListener("click", function () {
    appendToResult("9");
  });
  document.getElementById("zero").addEventListener("click", function () {
    appendToResult("0");
  });

  // Event listener for the decimal point button
  document.getElementById("decimal").addEventListener("click", function () {
    appendToResult(".");
  });

  // Event listener for the clear button
  document.getElementById("clear").addEventListener("click", function () {
    clearResult();
  });

  // Event listeners for the arithmetic operators (+, -, *, /)

  document.getElementById("add").addEventListener("click", function () {
    calculate("+"); //Perform the operator with the current operator selected.
  });
  document.getElementById("subtract").addEventListener("click", function () {
    calculate("-");
  });
  document.getElementById("multiply").addEventListener("click", function () {
    calculate("*");
  });
  document.getElementById("divide").addEventListener("click", function () {
    calculate("/");
  });

  // Event listener for the percentage button
  document.getElementById("percentage").addEventListener("click", function () {
    calculatePercentage();
  });

  // Event listener for the equals button
  document.getElementById("equals").addEventListener("click", function () {
    calculate("=");
  });
});
