import nodemailer from "nodemailer";
import User from "../../../models/userModel";
import bcryptjs from "bcryptjs";

export const sendEmail = async ({ email, emailType, userId }) => {
  const hashedToken = await bcryptjs.hash(userId.toString(), 10);

  const verifyHTML = `<p>Click <a href='${process.env.DOMAIN}/verifyemail?token=${hashedToken}'>here</a> to verify your email or copy and paste the link below in your browser <br>
      ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
      </p>`;

  const resetHTML = `<p>Click <a href='${process.env.DOMAIN}/resetemail?token=${hashedToken}'>here</a> to reset your password or copy and paste the link below in your browser <br>
          ${process.env.DOMAIN}/resetemail?token=${hashedToken}
          </p>`;
  try {
    if (emailType == "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          verifyToken: hashedToken,
          verifyTokenExpiry: Date.now() + 3600000,
        },
      });
    } else if (emailType == "RESET") {
      await User.findByIdAndUpdate(userId, {
        $set: {
          forgotPassWordToken: hashedToken,
          forgotPassWordExpiry: Date.now() + 3600000,
        },
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.NODEMAILER_USERNAME,
        pass: process.env.NODEMAILER_PASS,
      },
    });
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL, // sender address
      to: email, // email of receiver
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password", // Subject line
      html: emailType === "VERIFY" ? verifyHTML : resetHTML, // html body
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error) {
    throw new Error(error.message);
  }
};
