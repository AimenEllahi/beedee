import React from "react";
import "./styles/SecondSection.css";

function SecondSection() {
  const handleClick = () => {
    window.location.href = "/about";
  };

  return (
    <div className='outer-container-sec'>
      <div
        style={{
          height: "40vh",
          width: "30%",
          marginTop: "5%",
          marginLeft: "15%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src='/Doing.png' alt='beedee' />
      </div>

      <div className='text-container-sec'>
        <span className='buddy-text'>And his buddy, LooKaa</span>
        <div className='button-text-container-sec'>
          <span className='text-sec'>Get to know LooKaa more</span>
          <button onClick={handleClick} className='button-first'>
            <span
              style={{
                fontSize: "1.5rem",
              }}
            >
              &rarr;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondSection;
