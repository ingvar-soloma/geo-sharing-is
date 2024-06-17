// const TelegramBotService = require("@/services/TelegramBotServiceB");


addEventListener("syncTest", (resolve, reject, args) => {
  console.log("calling sending");

  const botToken = '7192431573:AAGtLVuTNAscrKPJlTI_n6ANmYmlWCrM0Fc';
  const chatId = '518383100';
  const message = 'Hello from your bot! B';

  // const telegramBot = new TelegramBotService(botToken, chatId.value);
  // telegramBot.sendMessage(message).then(r =>  {})

  setTimeout(() => {
    console.log("tick B");

    resolve();
  }, 3000);
});

addEventListener("syncTestF", (resolve, reject, args) => {
  console.log("calling sync syncTestF");

  const botToken = '7192431573:AAGtLVuTNAscrKPJlTI_n6ANmYmlWCrM0Fc';
  const chatId = '518383100';
  const message = 'Hello from your bot! F';

  // const telegramBot = new TelegramBotService(botToken, chatId.value);
  // telegramBot.sendMessage(message).then(r =>  {})

  setTimeout(() => {
    console.log("tick syncTestF");
    resolve();
  }, 3000);
});

addEventListener("asyncTest", async (resolve, reject, args) => {
  console.log("calling async test");
  await new Promise((res) => {
    setTimeout(() => {
      console.log("tick");
      res();
    }, 3000);
  });
  console.log("returning async result");
  resolve();
});
