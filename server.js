'use strict';

const express = require('express');
const restaurantsList = require('./config/restaurants.json');
const rand = require('unique-random')(0, restaurantsList.length - 1);
const RestaurantMailer = require('./restaurantMailer');

const app = express();
const restaurantMailer = new RestaurantMailer();

function chooseRestaurantSendEmail() {
  return new Promise((resolve) => {
    const randNum = rand();
    const mailOptions = {
      to: '',
      text: `DinnerBot has chosen and the restaurant is ... ${restaurantsList[randNum].name}!`
    };
    restaurantMailer.sendEmail(mailOptions)
    .then((data) => {
      resolve(data);
    });
  });
}

app.listen(8081, () => {
  console.log('DinnerBot listening on port 8081');
});

app.get('/dinnerBotTest', (req, res) => {
  chooseRestaurantSendEmail()
  .then((data) => {
    res.send(data);
  });
});
