import 'aframe'
import React, { Component } from 'react';
import './App.css';

// Solar System textures
import skybox from './assets/milkyway.jpg';

class App extends Component {
  render() {
    return (
      <div className="application">
        <a-scene className="solarSystem">
          <a-assets>
            <img src={skybox} alt="Milky Way skybox" id="skybox"></img>
          </a-assets>

          <a-camera look-controls="" wasd-controls="enabled:false;adEnabled:false;wsEnabled:false" position="0 10.272 25.664970417191608" rotation="-22.051841688289343 0 0" camera="" data-aframe-inspector-original-camera=""></a-camera>
          <a-entity light="type:ambient;color:#CCC"></a-entity>
          <a-sky src="#skybox" material="" geometry=""></a-sky>

          <a-sphere scale="2 2 2" light="type:point;castShadow:true;color:#fff000;groundColor:#fff000" id="Sun" material="color:#fff000;emissive: #fff000;" geometry=""></a-sphere>
          <a-entity class="planetWrapper" id="mercuryWrapper" rotation="0 -123.54649310552516 0">
            <a-animation attribute="rotation" to="0 236.4535068945 0" repeat="indefinite" easing="linear" class=""></a-animation>
            <a-sphere position="2.8 0 0" scale="0.16 0.16 0.16" class="planet" id="Mercury" material="color:#707070" geometry="" shadow=""></a-sphere>
          </a-entity>
          <a-entity class="planetWrapper" id="venusWrapper" rotation="0 -140.42042409742803 0">
            <a-animation attribute="rotation" to="0 219.5795759026 0" repeat="indefinite" easing="linear" class="" dur="2556.8"></a-animation>
            <a-sphere position="4 0 0" scale="0.4 0.4 0.4" class="planet" id="Venus" material="color:#da742b" geometry="" shadow=""></a-sphere>
          </a-entity>
          <a-entity class="planetWrapper" id="earthWrapper" rotation="0 -50.08019314169412 0">
            <a-animation attribute="rotation" to="0 309.9198068583 0" repeat="indefinite" easing="linear" class="" dur="4147.7"></a-animation>
            <a-sphere position="5.5 0 0" scale="0.4 0.4 0.4" class="planet" id="Earth" material="color:#313ab3" geometry="" shadow=""></a-sphere>
          </a-entity>
          <a-entity class="planetWrapper" id="marsWrapper" rotation="0 -52.2157213780263 0">
            <a-animation attribute="rotation" to="0 307.784278622 0" repeat="indefinite" easing="linear" class="" dur="7806.8"></a-animation>
            <a-sphere position="7 0 0" scale="0.3 0.3 0.3" class="planet" id="Mars" material="color:#9c362c" geometry="" shadow=""></a-sphere>
          </a-entity>
          <a-entity class="planetWrapper" id="jupiterWrapper" rotation="0 -134.7831351277301 0">
            <a-animation attribute="rotation" to="0 225.2168648723 0" repeat="indefinite" easing="linear" class="" dur="49357.95"></a-animation>
            <a-sphere position="10.724 0 0" class="planet" id="Jupiter" material="color:#f2650b" geometry="" shadow=""></a-sphere>
          </a-entity>
          <a-entity class="planetWrapper" id="saturnWrapper" rotation="0 -78.54840050547901 0">
            <a-animation attribute="rotation" to="0 281.4515994945 0" repeat="indefinite" easing="linear" class="" dur="122357.95"></a-animation>
            <a-sphere position="14.128444583532279 0 0" scale="0.9 0.9 0.9" class="planet" id="Saturn" material="color:#d48029" geometry="" shadow=""></a-sphere>
          </a-entity>
          <a-entity class="planetWrapper" id="uranusWrapper" rotation="0 37.27618576161151 0">
            <a-animation attribute="rotation" to="0 397.2761857616 0" repeat="indefinite" easing="linear" class="" dur="348409.1"></a-animation>
            <a-sphere position="17.88437169229927 0 0" scale="0.75 0.75 0.75" class="planet" id="Uranus" material="color:#7ed5cc" geometry="" shadow=""></a-sphere>
          </a-entity>
          <a-entity class="planetWrapper" id="neptuneWrapper" rotation="0 -11.264657818189338 0">
            <a-animation attribute="rotation" to="0 348.7353421818 0" repeat="indefinite" easing="linear" class="" dur="684375"></a-animation>
            <a-sphere position="22.223883142755664 0 0" scale="0.75 0.75 0.75" class="planet" id="Neptune" material="color:#26439c" geometry="" shadow=""></a-sphere>
          </a-entity>
          <a-entity class="planetWrapper" id="plutoWrapper" rotation="0 149.39822397516932 0">
            <a-animation attribute="rotation" to="0 509.3982239752 0" repeat="indefinite" easing="linear" class="" dur="1028636.3"></a-animation>
            <a-sphere position="27.007481094311125 0 0" scale="0.1 0.1 0.1" class="planet" id="Pluto" material="color:#5e5e5e" geometry="" shadow=""></a-sphere>
          </a-entity>
        </a-scene>
      </div>
    );
  }
}

export default App;
