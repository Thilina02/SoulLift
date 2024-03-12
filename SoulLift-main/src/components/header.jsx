import React from "react";
import Homeimg1 from '../images/Homeimg1.avif'
import Homeimg2 from '../images/Homeimg2.avif';
import Homeimg3 from '../images/Homeimg3.avif';
import Homeimg4 from '../images/Homeimg4.avif';
import Homeimg5 from '../images/Homeimg5.avif';
import Homeimg6 from '../images/Homeimg6.avif';
import Homeimg7 from '../images/Homeimg7.avif';
import Homeimg8 from '../images/Homeimg8.avif';
import './header.css'
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text" style={{marginLeft:'3vh',marginTop:'-22vh', width:'100%'}}>
                <div>
                <h1>
                Soul Lift
                  <span></span>
                </h1>
                <p> Your safe haven for expressing the depths of your soul!!!</p>
                
                </div>
               
               
                <div className='box'>
                    <span style={{ '--i': 1 } }>
                      <img src={Homeimg1} alt='slide1' />
                    </span>
                    <span style={{ '--i': 2 } }>
                      <img src={Homeimg2} alt='slide2' />
                    </span>
                    <span style={{ '--i': 3 } }>
                      <img src={Homeimg3} alt='slide3' />
                    </span>
                    <span style={{ '--i': 4 }}>
                      <img src={Homeimg4} alt='slide4' />
                    </span>
                    <span style={{ '--i': 5 } }>
                      <img src={Homeimg5} alt='slide5' />
                    </span>
                    <span style={{ '--i': 6 }}>
                      <img src={Homeimg6} alt='slide6' />
                    </span>
                    <span style={{ '--i': 7 }  }>
                      <img src={Homeimg7} alt='slide7' />
                    </span>
                    <span style={{ '--i': 8} }>
                      <img src={Homeimg8} alt='slide8' />
                    </span>
                  </div>


                
              </div>
            
            </div>
            <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
               style={{margin:'10vh'}} >
                  Learn More
                </a>{" "}
          </div>
        </div>
      </div>
    </header>
  );
};
