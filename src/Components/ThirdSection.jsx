import React from "react";
import "./ThirdSection.css";

function ThirdSection() {
  const handleLeftClick = () => {
    window.location.href = "/about";
  };

  const handleRightClick = () => {
    window.location.href = "/about";
  };
  return (
    <div className='outer-container-third'>
      <div className='image-container'>
        <img
          style={{
            width: "50%",
          }}
          src='/goedwhite2.png'
          alt='beedee'
        />
        <div className='text-container-bottom-left'>
          <div className='left-text-container-third'>
            <div className='star-img-third'>
              <img style={{ width: "30px" }} src='/star1.png' alt='start' />
            </div>
            <span className='whoisdeebee-text'>WHO IS DEEBEE</span>
          </div>
          <p style={{ padding: ".5vw" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            nisi, rem culpa necessitatibus suscipit quia maxime alias fuga
            recusandae iure officiis temporibus odio.
          </p>
          <div className='button-text-container-third'>
            <span className='text-third'>Get your own BeeDee</span>
            <button onClick={handleLeftClick} className='button-third'>
              <span
                style={{
                  fontSize: "1.3rem",
                }}
              >
                &rarr;
              </span>
            </button>
          </div>
        </div>
        <div className='text-container-top-right'>
          <div className='left-text-container-third'>
            <div className='star-img-third'>
              <img style={{ width: "30px" }} src='/star1.png' alt='start' />
            </div>
            <span className='whoislookaa-text'>WHO IS LOOKAA</span>
          </div>
          <p style={{ padding: ".5vw" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            nisi, rem culpa necessitatibus suscipit quia maxime alias fuga
            recusandae iure officiis temporibus odio.
          </p>
          <div className='button-text-container-third'>
            <span className='text-third-lookaa'>Get your own LooKaa</span>
            <button onClick={handleRightClick} className='button-third'>
              <span
                style={{
                  fontSize: "1.3rem",
                }}
              >
                &rarr;
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdSection;
