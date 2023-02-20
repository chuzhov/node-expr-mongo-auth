const nodemailer = require("nodemailer");

const {
  FRONTEND_BASE_URL,
  MAILER_EMAIL,
  MAILER_PWD,
} = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.ukr.net",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: MAILER_EMAIL,
    pass: MAILER_PWD,
  },
});

async function sendConfirmationEmail(
  userEmail,
  confirmationToken
) {
  const confirmationLink = `${FRONTEND_BASE_URL}/users/confirm-email?token=${confirmationToken}`;

  const mailOptions = {
    from: MAILER_EMAIL,
    to: userEmail,
    subject: "Confirm Your Email Address",
    html: `<p>Hi there!</p><p>Please click <a href="${confirmationLink}">this link</a> to confirm your email address.</p>`,
  };

  try {
    const info = await transporter.sendMail(
      mailOptions
    );
    return {
      status: true,
      message: "Email sent: " + info.response,
    };
  } catch (error) {
    return {
      status: false,
      message: "Error sending email: " + error,
    };
  }
}

module.exports = sendConfirmationEmail;
