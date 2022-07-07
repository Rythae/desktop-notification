const notifier = require('node-notifier');
const path = require('path');

notifier.notify(
  {
    title: "Salutations",
    message: "Hey there!",
    icon: path.join(__dirname, "notification.png"),
    sound: true,
    wait: true,
  },
  function (err, response) {
    console.log(response);
  }
);