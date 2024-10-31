$(document).ready(() => {
    const params = new URLSearchParams(window.location.search);
    $('#displayUsername').text(params.get('username'));

    const validateNumber = (number) => {
        return number && !isNaN(number) && number !== '' && !/[^0-9]/.test(number);
    };

    const validateInputs = () => {
        const num1 = $('#num1').val();
        const num2 = $('#num2').val();
        let isValid = true;

        if (!validateNumber(num1)) {
            $('#num1Error').text("Enter a valid number.");
            isValid = false;
        } else {
            $('#num1Error').text("");
        }

        if (!validateNumber(num2)) {
            $('#num2Error').text("Enter a valid number.");
            isValid = false;
        } else {
            $('#num2Error').text("");
        }

        return isValid;
    };

    const calculate = (operation) => {
        if (validateInputs()) {
            const num1 = parseFloat($('#num1').val());
            const num2 = parseFloat($('#num2').val());
            let result;

            switch (operation) {
                case 'add': result = num1 + num2; break;
                case 'subtract': result = num1 - num2; break;
                case 'multiply': result = num1 * num2; break;
                case 'divide': 
                    if (num2 === 0) {
                        alert("Cannot divide by zero.");
                        return;
                    }
                    result = num1 / num2; 
                    break;
            }
            $('#result').val(result);
        }
    };

    $('#add').click(() => calculate('add'));
    $('#subtract').click(() => calculate('subtract'));
    $('#multiply').click(() => calculate('multiply'));
    $('#divide').click(() => calculate('divide'));
});
