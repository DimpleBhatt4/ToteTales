import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Subscriber from "@/models/subscriberModel"; // Create a model to store emails
import nodemailer from "nodemailer";

connect();

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    // Check if the email already exists
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return NextResponse.json({ message: "You are already subscribed!" }, { status: 409 });
    }

    // Save the email to the database
    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.NODEMAILER_EMAIL, // Your Gmail email
        pass: process.env.NODEMAILER_EMAIL_PASS, // Your Gmail app password
      },
    });

    await transporter.sendMail({
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "Thank You for Subscribing!",
      text: "We appreciate you joining our mailing list. Stay tuned for exciting updates!",
    });

    return NextResponse.json({ message: "Subscription successful! Check your email." }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
