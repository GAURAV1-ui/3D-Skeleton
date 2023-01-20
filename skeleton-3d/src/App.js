import React, { Suspense } from 'react';
import './App.css';

// import background from './components/backround';
import Model from "./components/Male";
import {Canvas} from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';



function App() {
  return (
    <div className="App">
    <div className="wrapper">
        <div className="card">
            <div className="product-canvas">
      <Canvas>
      <Suspense fallback={null}>
      <ambientLight intensity={0.9} angle = {0.1} penumbra = {1}/>
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}/>
        <directionalLight position={[-2, 5, 2]} intensity ={1}/>
        
        
        {/* <background/> */}
          <Model />
        </Suspense>
      </Canvas>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
