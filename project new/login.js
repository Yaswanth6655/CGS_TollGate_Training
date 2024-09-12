document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    document.getElementById('output').innerHTML = "";
    document.getElementById('error').innerHTML = "";

    if (password !== confirmPassword) {
        document.getElementById('error').innerHTML = "Password does not match.";
    } else {
        document.getElementById('output').innerHTML = "Email: " + email + "<br>Password: " + password;
    }

    const loginForm = document.getElementById('loginForm');
    const outputDiv = document.getElementById('output');
    const errorDiv = document.getElementById('error');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email === 'gold@gmail.com' && password === '12345') {
            alert('Successfully logged in.');
            window.location.href = 'dashboard.html';
        } else {
            alert('Wrong Credentials.');
        }
    });
});
    