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
    const resend =  new Resend(process.env.RESEND_KEY)

    await resend.emails.send({
      from:process.env.RESEND_DOMAIN,
      to:process.env.EMAIL,
      subject:subject,
      html:emailBody
    })
    return NextResponse.json({ message: 'Email sent successfully!' },{status:200})
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Failed to send email!' },{status:500})
  }
}

