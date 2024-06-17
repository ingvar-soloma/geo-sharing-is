addEventListener("syncTest", async (resolve, reject, args) => {
  const location = await CapacitorGeolocation.getCurrentPosition();

  const botToken = '7192431573:AAGtLVuTNAscrKPJlTI_n6ANmYmlWCrM0Fc';
  const chatId = '518383100';

  await sendLocation(botToken, chatId, location.latitude, location.longitude)

  resolve();
});

addEventListener("syncTestF", async (resolve, reject, args) => {

  const location = await CapacitorGeolocation.getCurrentPosition();

  const botToken = '7192431573:AAGtLVuTNAscrKPJlTI_n6ANmYmlWCrM0Fc';
  const chatId = '518383100';

  sendLocation(botToken, chatId, location.latitude, location.longitude)

  resolve();
});

addEventListener("asyncTest", async (resolve, reject, args) => {
  await new Promise((res) => {
    setTimeout(() => {
      console.log("tick");
      res();
    }, 3000);
  });
  console.log("returning async result");
  resolve();
});

// addEventListener("testCapNotification", async (resolve, reject, args) => {
//   try {
//     let scheduleDate = new Date();
//     scheduleDate.setSeconds(scheduleDate.getSeconds() + 60);
//
//     CapacitorNotifications.schedule([
//       {
//         id: 100,
//         title: "Enterprise Background Runner",
//         body: "A test message from the Enterprise Background Runner",
//         scheduleAt: scheduleDate,
//       },
//     ]);
//
//     resolve();
//   } catch (err) {
//     console.error(err);
//     reject(err);
//   }
// });

addEventListener("testCapacitorGeolocation", async (resolve, reject, args) => {
  try {
    const location = await CapacitorGeolocation.getCurrentPosition();
    console.log("current location: " + JSON.stringify(location));
    resolve(location);
  } catch (err) {
    console.error(err);
    reject(err);
  }
});

async function sendMessage(botToken, chatId, message) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chatId,
      text: message,
      parse_mode: 'html'
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

async function sendLocation(botToken, chatId, latitude, longitude) {
  try {
    const baseUrl = `https://api.telegram.org/bot${botToken}/sendLocation`;

    const params = {
      chat_id: chatId.toString(),
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      live_period: '3600',
      horizontal_accuracy: '100',
      protect_content: 'true',
      disable_notification: 'true',
      // heading: '90',
      // title: 'test',
      // address: 'testadr'
    };

    const queryString = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');

    console.log('teststr');
    console.log(`${baseUrl}?${queryString}`);

    const response = await fetch(`${baseUrl}?${queryString}`, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Location sent successfully:', data);
  } catch (error) {
    console.error('Error sending location:', error.message);
    throw new Error('Error sending location');
  }
}

// export async function getCurrentPosition() {
//   const coordinates = await Geolocation.getCurrentPosition();
//   return coordinates.coords;
// }