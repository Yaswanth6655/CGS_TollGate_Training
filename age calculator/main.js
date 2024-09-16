document.getElementById('ageCalculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const birthYear = parseInt(document.getElementById('birthYear').value);
    const birthMonth = parseInt(document.getElementById('birthMonth').value) - 1; // Month is 0-indexed in JS
    const birthDay = parseInt(document.getElementById('birthDay').value);
    const birthTime = document.getElementById('birthTime').value;

    const birthDate = new Date(birthYear, birthMonth, birthDay);
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthYear;

    // Check if birthday hasn't occurred yet this year
    if (
        currentDate.getMonth() < birthMonth ||
        (currentDate.getMonth() === birthMonth && currentDate.getDate() < birthDay)
    ) {
        age--;
    }

    document.getElementById('result').innerHTML = `Hello ${name}, you are ${age} years old!`;
});
