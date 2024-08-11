const express = require("express");
const route = express.Router()
const {getContactForm, postEmail, getIndex, getAbout, getMenu} = require("../controller/contactUs")




route.get("/", getIndex)

route.get("/menu", getMenu)

route.get("/about", getAbout)

route.get("/contact", getContactForm)


route.post("/", postEmail)


module.exports = route // lol forgot this