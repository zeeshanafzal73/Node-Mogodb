const email = require("nodemailer");
const transport = email.createTransport({
  host: "smtp.gmail.com",
  port: "587",
  secure: false,
  requireTLS: true,
  auth: {
    user: "django.react73@gmail.com",
    pass: "Systems@lahore",
  },
});

var mailOptions = {
  from: "django.react73@gmail.com",
  to: "django.react73@gmail.com",
  subject: "Hello, Dear Csmith",
  text: "This is an email from Zeeshan afzal!",
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.warn(error);
  } else {
    console.warm("Email has been sent", info.response);
  }
});
