document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const user = document.getElementById("resetusername").value;
    const newPassword = document.getElementById("newPassword").value;
    const resetMessage = document.getElementById("resetMessage");
  
    // Retrieve user details from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
  
    if (storedUser) {
      // Update the user's password
      user.password = newPassword;
      localStorage.setItem(resetusername, JSON.stringify(user));
  
      resetMessage.style.color = "green";
      resetMessage.textContent = "Password reset successful!";
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    } else {
      resetMessage.style.color = "red";
      resetMessage.textContent = "User not found.";
    }
});
