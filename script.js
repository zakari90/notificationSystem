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
        return registration;
    } catch (error) {
        console.error("Service Worker registration failed:", error);
        throw error;
    }
};

const requestNotificationPermission = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission !== "granted") {
            throw new Error("Notification permission not granted");
        } else {
            new Notification("Notification from github");
        }
    } catch (error) {
        console.error("Failed to request notification permission:", error);
        throw error;
    }
};

const main = async () => {
    try {
        checkPermissions();
        await requestNotificationPermission();
        await registerServiceWorker();
        console.log("Service Worker registered successfully");
    } catch (error) {
        console.error("An error occurred:", error);
    }
};

main();
