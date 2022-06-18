if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
}

/*
const button = document.getElementById('notifications');
button.addEventListener('click', () => {
  Notification.requestPermission().then((result) => {
    if (result === 'granted') {
      randomNotification();
    }
  });
});

function randomNotification() {
  const notifTitle = "games[randomItem].name";
  const notifBody = "`Created by ${games[randomItem].author}.`";
  //const notifImg = "`data/img/${games[randomItem].slug}.jpg`";
  const options = {
    body: notifBody,
    //icon: notifImg,
  };
  new Notification(notifTitle, options);
  //setTimeout(randomNotification);
}*/