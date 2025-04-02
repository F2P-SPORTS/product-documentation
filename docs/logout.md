# Logging out...

<script>
    const basePath = window.location.pathname.split("/")[1];    
    const fullBaseUrl = window.location.origin
    localStorage.removeItem('authenticated');
    window.location.href = fullBaseUrl;  // Redirect to login page
</script>
