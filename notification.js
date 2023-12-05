function scheduleNotification() {
    setTimeout(function() {
      alert("Time's up! This is your notification."); // Display an alert as a pop-up
      // You can also use browser notifications: Notification.requestPermission().then(() => new Notification("Title", { body: "Message" }));
    }, 5000); // Set time in milliseconds (e.g., 5000 for 5 seconds)
  }
  