// Get form and fields
const form = document.getElementById('signupForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Bootstrap Validation + Custom Password Match
form.addEventListener('submit', function (event) {
  // Check native validation first
  if (!form.checkValidity()) {
    event.preventDefault();
    event.stopPropagation();
  }

  // Check password match
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }

  form.classList.add('was-validated');
});

// Real-time password match validation
confirmPassword.addEventListener('input', () => {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords do not match");
  } else {
    confirmPassword.setCustomValidity("");
  }
});
