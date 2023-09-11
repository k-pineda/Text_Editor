const butInstall = document.getElementById('buttonInstall');

let deferredPrompt; // Store the deferred prompt for later use

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault(); // Prevent the default browser prompt
    deferredPrompt = event; // Store the event for later use
    butInstall.style.display = 'block'; // Make the install button visible
  });

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt(); // Show the installation prompt
      const choiceResult = await deferredPrompt.userChoice;
      
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the PWA installation');
      } else {
        console.log('User dismissed the PWA installation');
      }
      
      deferredPrompt = null; // Reset the deferredPrompt variable
      butInstall.style.display = 'none'; // Hide the install button
    }
  });

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    console.log('PWA installed successfully');
});