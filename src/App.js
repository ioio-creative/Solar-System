import 'aframe'
import 'aframe-animation-component'
import React, { Component } from 'react';
import './App.css';
import { RenderBodies } from './classes/_render.js'

//Import static assets
import planetarySystemsFile from './static/data/planetarySystems.json'
import skybox from './static/img/milkyway.jpg';

class App extends Component {
  render() {
    return (
      <div className="application">
        <a-scene className="solarSystem">
          <a-assets>
            <img src = { skybox } alt="Milky Way skybox" id="skybox"></img>
          </a-assets>

          <a-camera look-controls="" wasd-controls="enabled:false;adEnabled:false;wsEnabled:false" position="0 10.272 25.664970417191608" rotation="-22.051841688289343 0 0" camera="" data-aframe-inspector-original-camera=""></a-camera>
          <a-entity light="type:ambient;color:#CCC"></a-entity>
          <a-sky src="#skybox" material="" geometry=""></a-sky>

          <a-entity class="planetWrapper" id="earthWrapper" rotation="0 -50.08019314169412 0">
             <a-animation attribute="rotation" to="0 309.9198068583 0" repeat="indefinite" easing="linear" class="" dur="4147.7"></a-animation>
             <a-sphere position="5.5 0 0" scale="0.4 0.4 0.4" class="planet" id="Earth" material="color:#313ab3" geometry="" shadow="">
               <a-entity class="planetWrapper" id="earthWrapper" rotation="0 -50.08019314169412 0">
                 <a-animation attribute="rotation" to="0 309.9198068583 0" repeat="indefinite" easing="linear" class="" dur="4147.7"></a-animation>
                 <a-sphere position="5.5 0 0" scale="0.4 0.4 0.4" class="planet" id="Earth" material="color:#313ab3" geometry="" shadow=""></a-sphere>
               </a-entity>
             </a-sphere>
           </a-entity>

          <RenderBodies planetaryBodies={ planetarySystemsFile.CelestialObjects } />
        </a-scene>
      </div>
    );
  }
}

export default App;
