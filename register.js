document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const registerMessage = document.getElementById('registerMessage');
  
    // Retrieve existing users from localStorage or initialize an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if username already exists
    const userExists = users.some(user => user.username === newUsername);
  
    if (userExists) {
      registerMessage.style.color = 'red';
      registerMessage.textContent = 'Username already exists. Please choose another.';
    } else {
      // Add the new user to the array
      users.push({ username: newUsername, password: newPassword });
  
      // Save updated users array to localStorage
      localStorage.setItem('users', JSON.stringify(users));
  
      registerMessage.style.color = 'green';
      registerMessage.textContent = 'Registration successful! Redirecting to login page...';
  
      // Redirect to login page
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 2000);
    }
  });