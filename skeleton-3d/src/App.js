import React, { Suspense } from 'react';
import './App.css';

import Model from "./components/Male";
import {Canvas} from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';



function App() {
  return (
    <wrapper className="App">
      <Canvas>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2, 5, 2]} intensity ={1}/>
        <Suspense fallback={null}>
          <Model/>
        </Suspense>
      </Canvas>
    </wrapper>
  );
}

export default App;
