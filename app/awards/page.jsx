'use client';

import { useState } from "react";
import Badge from "@/components/Badge.";
import Certificate from "@/components/Certificate";
import BadgesData  from "@/data/badges";
import CertificateData  from "@/data/certificate" ;

const MAX_BADGES_PAGE = 8
const MAX_CERT_PAGE = 4

export default function Page() {
  const [page,setPage] = useState(0);
  const [startBadge,setStartBadge] = useState(0);
  const [startCertificate,setStartCertificate] = useState(0);

  const badgePageSize = Math.ceil(BadgesData.length / MAX_BADGES_PAGE)
  const certificatePageSize = Math.ceil(CertificateData.length / MAX_CERT_PAGE)

  const ChangePage=(button_index)=>{
    if(page==0)
    {
      setStartCertificate(button_index * MAX_CERT_PAGE)
    }
    else
      setStartBadge(button_index * MAX_BADGES_PAGE)
  }
 

  return (
    <section className="flex flex-col justify-start h-full object-contain ">
      <div className="flex flex-row bg-black justify-evenly w-full p-4 my-2 ">
        <button className={` w-2/5 text-center btn bg-black rounded-md text-white   ${page==0?"outline":""}`} onClick={()=>setPage(0)}>Certificates</button>
        <button className={`w-2/5 text-center btn bg-black rounded-md   text-white  ${page==1?" outline":""}`} onClick={()=>setPage(1)}>Badges</button>
      </div>

      
        { page == 0?
          <div className="backdrop-blur-xl overflow-auto no-scrollbar   p-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-2 place-items-start rounded-box  justify-center">
             {CertificateData.map((obj, index) => {
            if(index>=startCertificate && index<MAX_CERT_PAGE+startCertificate)
            return <Certificate key={index} url={obj.url} title={obj.title} />;
          })}
        </div>
            :
        <div className="backdrop-blur-xl overflow-auto no-scrollbar  p-6 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-start rounded-box  justify-center">
          {BadgesData.map((obj, index) => {
            if(index>=startBadge && index<MAX_BADGES_PAGE+startBadge)
            return <Badge key={index} url={obj.url} title={obj.title} />;
          })}
        </div>}
        <div className="flex flex-row gap-2 w-full justify-center ">
        {
          page==0?[...Array(certificatePageSize)].map((val,index)=>{
            return <button key={index} onClick={()=>ChangePage(index)} className={`p-1 w-10 h-10 my-2 bg-black rounded-full text-white ${index==startCertificate/MAX_CERT_PAGE? "outline-white outline-2 outline " : ""} `}>{index+1}</button>
          })  : 
          [...Array(badgePageSize)].map((val,index)=>{
            return <button key={index} onClick={()=>ChangePage(index)} className={`p-1 w-10 h-10 my-2 bg-black rounded-full text-white ${index==startBadge/MAX_BADGES_PAGE? "outline-white outline-2 outline " : ""} `}>{index+1}</button>
          }) 
        }
        
        </div>
        

    </section>
  );
}
