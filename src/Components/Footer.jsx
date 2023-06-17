import React from "react";
import "./Footer.css";

function Footer() {
  const handleFooterClick = () => {
    console.log("Here");
    // Scroll to top section
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className='footer-container'>
      <div className='footer-inner-containe'>
        <button onClick={handleFooterClick} className='oval-button'>
          GO TO TOP
        </button>
      </div>
      <div style={{ position: "relative" }} className='footer-line'></div>
      <div className='footer-inner-container'>
        <img
          className='footer-text'
          src='/BD_Sticker.png'
          alt=''
          style={{
            fontSize: "3rem",
            marginTop: "4.5%",
            fontWeight: "bold",
          }}
        />
        <span className='footer-text'>© Born Digital 2023</span>
      </div>
    </div>
  );
}

export default Footer;
