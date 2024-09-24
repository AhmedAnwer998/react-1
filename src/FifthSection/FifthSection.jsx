import React, {useState, useEffect} from 'react'
import img14 from "../images/img14.jpg";
import img16 from "../images/img16.jpg";
import img18 from "../images/img18.jpg";
import img19 from "../images/img19.jpg";
import img10 from "../images/img10.jpg";
import { ClassNames } from '@emotion/react';




const FifthSection = () => {



const images = [img14, img16, img18, img19, img10];

const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


useEffect(()=>{
const handleResize = ()=>{
  setIsMobile(window.innerWidth < 768);
}
window.addEventListener('resize', handleResize)
return ()=>{
  window.removeEventListener('resize', handleResize)
  }
}, [])










  return (
    <>
        <div className='animation-1  animation-2'></div>
        

    </>
  )
}

export default FifthSection
