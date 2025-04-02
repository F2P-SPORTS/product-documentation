const basePath = window.location.pathname.split("/")[1]
const fullBaseUrl = window.location.origin + basePath;
// Logout function to clear authentication and redirect
function logout() {
    localStorage.removeItem('authenticated');
    window.location.href = fullBaseUrl
  }
  
  // Bind the logout function to a button or link (if needed)
  document.addEventListener("DOMContentLoaded", function() {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
      logoutButton.addEventListener('click', logout);
    }
  });
  