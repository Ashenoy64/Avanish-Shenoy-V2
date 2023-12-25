import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req){
  const { name, email, subject, message } = await req.json();

  const emailBody = `
  Name  :${name}
  Email :${email}
  ---------------------------------------
  ${message}
  `

  try {
    // const resend =  new Resend(process.env.RESEND_KEY)

    // await resend.emails.send({
    //   from:process.env.RESEND_DOMAIN,
    //   to:process.env.EMAIL,
    //   subject:subject,
    //   html:emailBody
    // })

    let nodemailer = require('nodemailer')

    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      secure: true,
    })

    const mailData = {
      from: process.env.EMAIL,
      to:process.env.MAIN_EMAIL,
      subject: `Message From ${name} ${subject} `,
      text: message + " | Sent from: " + email,
      html: emailBody
     }

     transporter.sendMail(mailData, function (err, info) {
      if(err){
        console.log(err)
        throw(err)
      }
      else
        console.log(info)
    })

    return NextResponse.json({ message: 'Email sent successfully!' },{status:200})
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Failed to send email!' },{status:500})
  }
}

