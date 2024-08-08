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

self.addEventListener('activate', async () => {
    // This will be called only once when the service worker is activated.
    try {
      const options = {}
      const subscription = await self.registration.pushManager.subscribe(options)
      console.log(JSON.stringify(subscription))
    } catch (err) {
      console.log('Error', err)
    }
  })
console.log("Service Worker ended");
