const basePath = window.location.pathname.split("/")[1]
const fullBaseUrl = window.location.origin + "/" + basePath;


// Check if user is authenticated
if (localStorage.getItem('authenticated') !== 'true') {
    // Redirect to login page using the correct base path
    window.location.href = `${fullBaseUrl}/login.html`;  // Redirect to login if not authenticated
}