const nodeMailer = require("nodemailer");


const transporter = nodeMailer.createTransport({
    
        service: "GMAIL",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS,
        }
    
})

const sendMail = (to, subject, text) => {
    const emailStructure = {
        from: process.env.EMAIL, //transporter already know what to put, so the name convention is up to you
        to, 
        subject,
        text
    }

    return transporter.sendMail(emailStructure) 
}


module.exports = sendMail;