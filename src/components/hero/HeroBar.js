import React, { useState } from "react";
import Slider from "react-slick";
import {
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    
} from "../../assets/index";


const HeroBar = () => {
    const [dotActive, setDocActive] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        autoplay:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (prev, next) => {
            setDocActive(next);
          },
        
        appendDots: (dots) => (
            <div
              style={{
                position:"absolute",
                top:"70%",
                left:"45%",
                transform:"translate(-50% -50%",
                width:"210px",
              }}
            >
              <ul 
              style={{ 
                width:"100%",
                display:"flex",
                alignItems:"center",
                justifyContent:"space-between",
               }}
               > 
               {""}
               {dots}{""} 
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                ? {
                    width: "30px",
                    height:"30px",
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    color:"white",
                    background:"#131921",
                    padding:"8px 0",
                    cursor:"pointer",
                    border:"1px solid #f3a847",
                  }
                : {
                    width: "30px",
                    height:"30px",
                    borderRadius:"50%",
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    color:"white",
                    background:"#131921",
                    padding:"8px 0",
                    cursor:"pointer",
                    border:"1px solid #f3a847",
                    opacity: 0.6,
                  }
            }
            >
              {i + 1}
            </div>
          ),
      };
  return (
    <div className="w-full">
        <div className="w-full h-full relative">
            <Slider {...settings}>
            <div>
                <img src={Image1} alt="image1" />
            </div>
            <div>
                <img src={Image2} alt="image2" />
            </div>
            <div>
                <img src={Image3} alt="image3" />
            </div>
            <div>
                <img src={Image4} alt="image4" />
            </div>
            <div>
                <img src={Image5} alt="image5" />
            </div>
            </Slider>
        </div>
    </div>
  )
}

export default HeroBar