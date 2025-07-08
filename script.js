document.addEventListener("DOMContentLoaded", () => {
    console.log("SafeSakhi App Loaded");

    // Example feature: Notify user of a health check
    function healthCheckReminder() {
        alert("Don't forget to check your health regularly!");
    }
    
    // Example feature: Safety alert
    function safetyAlert() {
        alert("Emergency contacts have been notified for safety!");
    }

    // Simulate calling the features
    setTimeout(healthCheckReminder, 5000); // Notify after 5 seconds
    setTimeout(safetyAlert, 10000); // Safety alert after 10 seconds
});