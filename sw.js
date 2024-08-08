// self.addEventListener('push', event => {

//     const data = event.data ? event.data.json() : {};
//     const options = {
//         body: data.body || 'Default notification body',
//         icon: 'icon.png', // Ensure this path is correct
//         badge: 'badge.png' // Ensure this path is correct
//     };

//     event.waitUntil(
//         self.registration.showNotification(data.title || 'Default Title', options)
//     );
// });

// self.addEventListener('notificationclick', event => {
//     event.notification.close();
//     event.waitUntil(
//         clients.openWindow('/')
//     );
// });

console.log("Service Worker loaded");
