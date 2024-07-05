import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "ajabafrancis@gmail.com",
    pass: "",
  },
});

const mailOptions = {
  from: "ajabafraancis@gmail.com",
  to: "casson1212@gmail.com",
  subject: "Sending Email using Node.js",
  text: "",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
