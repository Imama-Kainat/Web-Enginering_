const performOperations = (operation) => {
    // Get input values
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
  
    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").textContent = "Please enter valid numbers.";
      return;
    }
  
    // Perform the operation
    let result;
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          document.getElementById("result").textContent = "Division by zero is not allowed.";
          return;
        }
        result = num1 / num2;
        break;
      default:
        result = "Invalid operation.";
    }
  
    // Display the result
    document.getElementById("result").textContent = `Result: ${result}`;
  };
  