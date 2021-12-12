require('dotenv').config();

const accountId = process.env.TWILIO_ACCT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountId, authToken);

client.messages.create({
  body: 'Thank you for orderging from IndiChef. Prepaid Order# 123abc456 will be delivered in next 30mins. Track your order on https://bit.ly/3qszi3h ',
  from: '+18592794291',
  to: '+918217699518'
}).then(message => console.log(message))
  .catch(err => console.log(err))
  ;

