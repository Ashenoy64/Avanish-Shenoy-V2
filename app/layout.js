'use client';
import { useRef, useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import Head from 'next/head';
import Experience from '@/THREE/Expirence';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import _data  from '@/data/metadata';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const [threeState,setThreeState] = useState(undefined)
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && !threeState) {
      const experience = new Experience(canvasRef.current, true);
      setThreeState(experience)
      experience.resources.on('ready', () => {
        setLoading(false);
      });
    }
    
  }, []);

  return (
    <html lang="en" className='no-scrollbar'>
      <Head>
        <title>{_data.title}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="description" content={_data.description} />
      </Head>
      <body className='no-scrollbar h-screen w-full font-JBMono'>
        <canvas ref={canvasRef} className="webgl"></canvas>
        {
          loading ? <Preloader /> : (
            <>
              <Navbar />
              {children}
              <Analytics/>
              <SpeedInsights/>
              <Footer />
            </>
          )
        }
      </body>
    </html>
  );
}
