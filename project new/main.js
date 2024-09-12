document.getElementById('registrationForm').addEventListener('submit', function (event) {
  const password = document.getElementById('inputPassword4').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const passwordError = document.getElementById('passwordError');

  if (password !== confirmPassword) {
      event.preventDefault(); 
      passwordError.textContent = 'Passwords do not match!';
      passwordError.style.display = 'block'; 
  } else {
      passwordError.style.display = 'none'; 
  }
});
