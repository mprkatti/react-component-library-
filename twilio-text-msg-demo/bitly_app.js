require('dotenv').config();

const accessToken = '050127646ae9c5a7e98c04192f092269738bba48';

const BitlyClient = require('bitly').BitlyClient;

const bitly = new BitlyClient(accessToken);

const shortenUrl = async (url) => {

  try {
    const response = await bitly.shorten(url);
    console.log(`Shortened URL is ${response.link}`);

  } catch (error) {
    console.log(error);
  }

}

// shortenUrl('http://example.com/order/5e576906-5bf6-4456-ac93-590985c740e3');
shortenUrl('https://e116b98875e5.ngrok.io/order/5e576906-5bf6-4456-ac93-590985c740e3');