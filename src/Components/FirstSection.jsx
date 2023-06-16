import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useProgress, Html } from "@react-three/drei";
import { Mascot } from "./Mascot";
import "./index.css"


const Loader = () => {
  const { progress } = useProgress();
  return (
    
    <Html center style={{ color: "#FFFFFF", fontSize: "5vw" ,marginTop: "20vw", marginLeft: "20vw" }}>
      {progress}
    </Html>
  );
};

const MascotModel = () => {
  return (
    <div style={{ width: "100%", height: "80vh", backgroundColor: "#1E1E1E", float: "right", margin: "0", padding: "0", position: "relative" }}>
      <Canvas camera={{ position: [0, 0, 0], fov: 37 }} >
        <ambientLight intensity={0.8} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Suspense fallback={<Loader />}>
          <directionalLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} />
          <Mascot />
        </Suspense>
       <OrbitControls/>
      </Canvas>
    </div>
  );
};

export default function Index() {
  
  return (
    <div className="outer-container-first" style={{ width: "100%", height: "110vh", backgroundColor: "#1E1E1E"}}>
      <div className="inner-container-first" >
        <div className="header-container-first">
          <h1 className="header-first">Born</h1>
        </div>
        <MascotModel/>
        <div className="text-container-first">
          <span className="meet-text">Meet BeeDee</span>
          <div className="button-text-container">
            <span className="text-first">
              Get to know BeeDee more
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
        <div className='bottom-text-container-first'>
          <div className='star-img'>
            <img src='/Star.svg' alt='start' />
          </div>
          <span className='star-text'>EDEN DIGITAL MASCOTTE</span>
        </div>
      </div>
      <div className='line-break'></div>
    </div>
  );
}
