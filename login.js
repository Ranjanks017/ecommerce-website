document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');
  
    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
  
    // Check if the user exists and the password matches
    const validUser = users.find(user => user.username === username && user.password === password);
  
    if (validUser) {
      loginMessage.style.color = 'green';
      loginMessage.textContent = 'Login successful! Redirecting...';

      setTimeout(() => {
        window.location.href = 'index.html';
      }, 2000);
      
      document.getElementById('username-display').textContent = `Welcome, ${username}!`;
    } else {
      loginMessage.style.color = 'red';
      loginMessage.textContent = 'Invalid username or password.';
    }
  });

  