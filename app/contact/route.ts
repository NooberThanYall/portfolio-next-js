import { log } from "console";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Parse form data
    const formData = await req.formData();
    const data = Object.fromEntries(formData.entries()); // Convert FormData to an object
    console.log(data);

    const { name, email, message } = data;

    // const body = await req.json()

    // Validate the form fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // e.g., smtp.gmail.com
      port: 587, // Common port for TLS
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL, // Your email address
        pass: process.env.NEXT_PUBLIC_PASS, // Your email password or app-specific password
      },
    });

    // // Set up the email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender details
      to: 'parhammohebi2009@gmail.com ', // Your email address (recipient)
      subject: "New Contact Form Submission",
      text: `Message from ${name} (${email}):\n\n${message}`,
    };

    // // Send the email
    // await transporter.sendMail(mailOptions);

    return NextResponse.redirect('/thank-you')
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
