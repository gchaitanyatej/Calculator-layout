    const display = document.getElementById('display');

    // Append character to the display
    function appendCharacter(character) {
        if (display.value === "0") {
            display.value = character;
        } else {
            display.value += character;
        }
    }

    // Append operator to the display, ensuring "*" or "/" can't be entered at the start
    function appendOperator(operator) {
        const currentValue = display.value;
        const lastChar = currentValue[currentValue.length - 1];

        // Ensure that * or / can't be the first character
        if (currentValue === "0" && (operator === "*" || operator === "/")) {
            return;
        }

        // Prevent consecutive operators
        if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
            return;
        }

        display.value += operator;
    }

    // Reset the display to "0"
    function resetDisplay() {
        display.value = "0";
    }

    // Delete the last character from the display
    function deleteLast() {
        display.value = display.value.slice(0, -1);
        if (display.value === "") {
            display.value = "0";
        }
    }

    // Calculate the result based on the expression
    function calculate() {
        let expression = display.value.replace('x', '*'); // Replace 'x' with '*' for multiplication
        try {
            display.value = eval(expression);
        } catch (error) {
            display.value = "Error";
        }
    }
