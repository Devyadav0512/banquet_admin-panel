import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "../CSS/gallery.css";
import "react-alice-carousel/lib/alice-carousel.css";
import g1 from "../assets/g1.jpg"
import g2 from "../assets/g2.jpg"
import g3 from "../assets/g3.jpg"
import g4 from "../assets/g4.jpg"
import g5 from "../assets/g5.jpg"
import g6 from "../assets/g6.jpg"
import g7 from "../assets/g7.jpg"
import g8 from "../assets/g8.jpg"
import g9 from "../assets/g9.jpg"
import g10 from "../assets/g10.jpg"
import g11 from "../assets/g11.jpg"



function Gallery()
{
  return (
    <>
    <div className="Gallery">
    <div  style={{
            
            justifyContent:"center",
            
            fontFamily:"Lexend Giga",
            backgroundColor:"whitesmoke",
            padding:"2%"}}>
    <h1 data-aos="fade-down" style={{textAlign:"center", fontFamily:"Lexend Giga",}}>OUR GALLERY</h1>
    
    <AliceCarousel autoPlay autoPlayInterval="3000">
      <img src={g1} className="sliderimg"/>
      <img src={g2} className="sliderimg"/>
      <img src={g3} className="sliderimg"/>
      <img src={g4} className="sliderimg"/>
      <img src={g5} className="sliderimg"/>
      <img src={g6} className="sliderimg"/>
      <img src={g7} className="sliderimg"/>
      <img src={g8} className="sliderimg"/>
      <img src={g9} className="sliderimg"/>
      <img src={g10} className="sliderimg"/>
      <img src={g11} className="sliderimg"/>
      
</AliceCarousel>
</div>
</div>
</>
  );
}
export default Gallery;