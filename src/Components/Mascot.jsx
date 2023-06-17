/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 Mascot.glb --transform
*/

import React, { useRef } from "react";
import { PresentationControls, useGLTF } from "@react-three/drei";
export function Mascot(props) {
  const { nodes, materials } = useGLTF("/Model/Mascot-transformed.glb");

  //to orbit the model horizontally
  const ref = useRef();
  //method to rotate the model to opposite side horizontally on click

  return (
    <group
      {...props}
      dispose={null}
      ref={ref}
      position={[
        window.innerWidth < 750 ? 0 : 15.1
      , -8.5, -48.4]}
      scale={0.7}
    >
      <PresentationControls
        polar={[0, 0]} // Vertical limits
      >
        {" "}
        <mesh
          geometry={nodes.Tail003.geometry}
          material={nodes.Tail003.material}
          position={[9.224, 3.282, -1.451]}
          scale={[0.793, 0.793, 1.479]}
        />
        <mesh
          geometry={nodes.Curve002.geometry}
          material={materials["Material.077"]}
          position={[-1.65, 6.166, 5.585]}
          rotation={[Math.PI / 2, 0, -0.01]}
          scale={62.324}
        />
        <mesh
          geometry={nodes.Cube109.geometry}
          material={materials["Material.001"]}
          position={[9.742, 2.893, 5.686]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[0.251, 0.496, 0.357]}
        />
        <mesh
          geometry={nodes.Cube104.geometry}
          material={materials["Material.003"]}
          position={[9.277, 3.303, 4.284]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[2.121, 1.91, 1.566]}
        />
        <mesh
          geometry={nodes.Cube007.geometry}
          material={materials["Material.105"]}
          position={[-0.828, 18.92, 5.934]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[7.452, 6.712, 5.501]}
        />
        <mesh
          geometry={nodes.Cube006.geometry}
          material={materials["Material.092"]}
          position={[1.12, 17.48, 10.858]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={[1.392, 1.743, 1.254]}
        />
        <mesh
          geometry={nodes.Body001.geometry}
          material={materials["Body.002"]}
          position={[-0.894, 6.631, 2.488]}
          scale={4.872}
        />
      </PresentationControls>
    </group>
  );
}

useGLTF.preload("/Mascot-transformed.glb");
