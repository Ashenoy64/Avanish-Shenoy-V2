import { NextResponse } from 'next/server';

export async function POST(req){
    const { recaptchaResponse } = req.body;
    const secretKey = process.env.RECAPTCHA_SECRET;
    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaResponse}`,
        {
          method: "POST",
        }
      );
      const data = await response.json();
    
      if (data.success) {
        return NextResponse.json({ success:true },{status:200})
      } else {
        return NextResponse.json({ success:false },{status:200})
      }
    
 
}

