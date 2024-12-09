function validateForm() {
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const phoneRegex = /^[0-9]{11}$/;
    const gender = document.getElementById('gender').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    document.querySelectorAll('.error').forEach(e => e.textContent = '');

    let isValid = true;
    if (name === '') {
        document.getElementById('name-error').textContent = 'Name is required';
        isValid = false;
    }
    if (!phoneRegex.test(phone)) {
        document.getElementById('phone-error').textContent = 'Enter a valid 11-digit phone number';
        isValid = false;
    }
    if (gender === '') {
        document.getElementById('gender-error').textContent = 'Gender is required';
        isValid = false;
    }
    if (password.length < 6) {
        document.getElementById('password-error').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }
    if (password !== confirmPassword || confirmPassword==='') {
        document.getElementById('confirmPassword-error').textContent = 'Passwords do not match';
        isValid = false;
    }
    if (confirmPassword==='') {
        document.getElementById('confirmPassword-error').textContent = 'Password must be at least 6 characters';
        isValid = false;
    }

    if (isValid) {
        console.log(name);
        console.log(phone);
        console.log(gender);
        console.log(password);
        const alertBox = document.getElementById("alertBox");
        alertBox.style.display = "block";
        setTimeout(() => {
            alertBox.style.display = "none";
            location.reload();
        }, 3000);
    }
}
