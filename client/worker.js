console.log("Service Worker Loaded");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("Push Recieved...");
  self.registration.showNotification(data.title, {
    body: "Notified by cho",
    icon: "http://image.ibb.co/frY0Fd/tmlogo.png",
  });
});
