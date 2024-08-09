const checkPermissions = () => {
    if (!("serviceWorker" in navigator)) {
        throw new Error("Service Worker is not supported");
    }
    if (!("Notification" in window)) {
        throw new Error("Notifications are not supported");
    }
};

const registerServiceWorker = async () => {
    try {
        const registration = await navigator.serviceWorker.register("/sw.js");
        console.log('Service Worker registered:', registration);
        return registration;
    } catch (error) {
        console.error("Service Worker registration failed:", error);
        throw error;
    }
};

const requestNotificationPermission = async () => {
    try {
        const permission = await Notification.requestPermission();
        // value of permission can be 'granted', 'default', 'denied'
        // granted: user has accepted the request
        // default: user has dismissed the notification permission popup by clicking on x
        // denied: user has denied the request.
        if (permission !== "granted") {
            throw new Error("Notification permission not granted");
        } else {
            console.log("Notification permission granted.");
        }
    } catch (error) {
        console.error("Failed to request notification permission:", error);
        throw error;
    }
};

const showLocalNotification = (title, body, swRegistration) => {
    const options = {
        body,
        // You can add more properties like icon, image, vibrate, etc.
    };
    console.log("Showing notification with options:", options);
    swRegistration.showNotification(title, options);
};

const main = async () => {
    try {
        checkPermissions();
        console.log("Service Worker and Notification are supported");
        
        await requestNotificationPermission();
        console.log("Notification permission granted");

        const swRegistration = await registerServiceWorker();
        console.log("Service Worker registered");
        // showLocalNotification('This is the title', 'This is the message', swRegistration);

    } catch (error) {
        console.error("An error occurred:", error);
    }
};

// main();
