const express = require("express");
const app = express();
const path = require("path");
const sendMail = require("../utils/utils");


const getAbout = (req,res) => {
  res.sendFile(path.join(__dirname, "../templates/about.html"))
}

const getMenu = (req,res) => {
  res.sendFile(path.join(__dirname, "../templates/menu.html"))
}

const getIndex = (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/index.html"));
};

const getContactForm = (req, res) => {
  res.sendFile(path.join(__dirname, "../templates/contactUs.html"));
};


const postEmail = async (req, res) => {
  console.log(req.body);

  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    res.redirect("/contact?success=false");

    console.log(subject, message);
  } else {
    await sendMail(
      /// send to OWNER
      process.env.EMAIL, // to
      "New Contact", // subject
      `From: ${email}\nSubject: ${subject}\nMessage: ${message}` // text
    );

    await sendMail(
      email,
      "Here is your Contact Receipt",
      `Thank you for Contacting Casita's\nSubject: ${subject}\nMessage: ${message}`
    );

    res.redirect("/contact?success=true");
  }
};

module.exports = { getContactForm, getIndex, getAbout, getMenu ,postEmail };
