'use strict';

const nodemailer = require('nodemailer');
const config = require('./config/config.json');

function RestaurantMailer() {}

RestaurantMailer.prototype.sendEmail = function sendEmail(mailerOptions) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.userName,
        pass: config.password
      }
    });

    transporter.sendMail(mailerOptions, (error, info) => {
      if (error) {
        reject(error);
      }
      resolve(`Message ${info.messageId} sent: ${info.response}`);
    });
  });
};

module.exports = RestaurantMailer;
