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

  const subscription = await self.registration.pushManager.getSubscription()

// urlB64ToUint8Array is a magic function that will encode the base64 public key
// to Array buffer which is needed by the subscription option
const urlB64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
    const rawData = atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  }
  self.addEventListener('activate', async () => {
    // This will be called only once when the service worker is activated.
    try {
      const applicationServerKey = urlB64ToUint8Array(publicKey)
      const options = { applicationServerKey, userVisibleOnly: true }
      const subscription = await self.registration.pushManager.subscribe(options)
      console.log("addEventListener('activate -->"+ JSON.stringify(subscription))
    } catch (err) {
      console.log('Error', err)
    }
  })

console.log("subscription ----->" + subscription);
console.log("Service Worker ended");


const publicKey = "BHHMHf-ODDQ99rS7-tyHt0QnB1-ntsVzFvebI0f4zZocT5kpYwsE-fZlws9_WJscx8NQ_cioihK8BLqABDhTw1g"

// Private Key:
// BUchHAT99c4QBInXF3T2hQ4aIym_1zastM4b0Yfk1E0
