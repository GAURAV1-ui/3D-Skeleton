import React, { Suspense} from 'react';
import {Canvas} from "@react-three/fiber";

import { OrbitControls,useThree } from '@react-three/drei';
import './App.css';
// import Button from './components/Button';
// import background from './components/backround';
import Model from "./components/Male";


// function Foo() {
//   const { camera } = useThree();
// }

function App() {
  // const { camera } = useThree();
  // const [rotate,setRotate] = useState([0,0,100])
  // let camera = new THREE.PerspectiveCamera (90, 1, 1, 100);
  // let [x, y, z] = [10, 10, 10];
// camera.position.set(x, y, z);
  // const [rotate, setRotate] = useState([0, 0, 100]);
//   useEffect = () =>{
//     const frontHandler= () =>{
//       console.log("");
//       setRotate(
//       (camera.position.set([10, 10, 10])
//       ));
//   }
// }
  

 

 
  return (
    <div className="App">
    <div className="wrapper">
        <div className="card">
            <div className="product-canvas">
      <Canvas camera={{fov: 75,position:[0,0,100]}}>
        
      <Suspense fallback={null}>
      <ambientLight intensity={0.9} angle = {0.1} penumbra = {1}/>
        
        <directionalLight position={[-2, 5, 2]} intensity ={1}/>
        
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          target={[1, 1, 1]}
          />

        {/* <background/> */}
          <Model />
          
        </Suspense>
      </Canvas>
      {/* <button onClick={frontHandler}>Front</button> */}
      {/* <button>Back</button>
      <button>right</button>
      <button>left</button> */}
                </div>
            </div>
        </div>
       
    </div>
  );
}

export default App;
