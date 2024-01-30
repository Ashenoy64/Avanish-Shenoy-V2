import { NextResponse } from 'next/server';
import emailjs from '@emailjs/browser'

export async function POST(req){
  const { name, email, subject, message } = await req.json();

  const emailBody = {
    from_name:name,
    subject_sub:subject,
    to_name:"Avanish",
    message:message,
    from_email:email,
  }

  try {

    const response = await emailjs.send(process.env.EMAIL_JS_SERVICE_ID,process.env.EMAIL_JS_TEMPLATE_ID,emailBody,process.env.NEXT_PUBLIC_EMAIL_JS)
    
    console.log(response.text)
    return NextResponse.json({ message: 'Email sent successfully!' },{status:200})
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: 'Failed to send email!' },{status:500})
  }
}

