import React from 'react';

function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-inner-containe'>
        <button className='oval-button'>GO TO TOP</button>
        </div>
        <div style={{position: "relative"}} className='footer-line'></div>
        <div className='footer-inner-container'>
        <span className='footer-text' style={{
            color: "#FFFFFF",
            fontSize: "3rem",
            marginTop: "4.5%",
            fontWeight: "bold",
        }}>B</span>
        <span className='footer-text'>© Born Digital 2023</span>
        </div>
    </div>
  );
}

export default Footer;
