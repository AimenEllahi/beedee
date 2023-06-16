import React from 'react'

function SecondSection() {
  return (
    <div className='outer-container-sec' >
        <div style={{
          height: "40vh",
          width: "30%",
          marginTop: "5%",
          marginLeft: "15%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
          }}>
          <img src="/Doing.png" alt="Your Image"/>
        </div>

         <div className="text-container-sec">
          <span className="buddy-text">And his buddy, LooKaa</span>
          <div className="button-text-container-sec">
            <span className="text-sec">
              Get to know LooKaa more
            </span>
            <button className="button-first">
              <span style={{
                fontSize: "1.5rem",
                }} >
                  &rarr;
              </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default SecondSection