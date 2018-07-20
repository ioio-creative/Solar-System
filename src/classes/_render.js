import React from 'react';
import '../App.css';

var animationSpeed = 5;
var distanceMultiplier = 20;

export function RenderSystems(props) {

}

export function RenderCelestialBody(props) {
  //Initialise celestial Body values
  var name = props.celestialBody.name.toLowerCase() || "A_Celestial_Body"; // Name of celestial body
  var scale = props.celestialBody.scale || "1"; // Scale of celestial body
  var center = props.celestialBody.center || "0 0 0"; //Center of celestial body, can take name of another object
  var radius = props.celestialBody.radius || "1"; //Radius of the celestial object away from the center object
  var position = props.celestialBody.position || "0"; //Start position in orbit
  var rotation = props.celestialBody.rotation || "0"; //Period of self roation in ms/days whatever you choose
  var period = props.celestialBody.period || "100"; //Period of ms
  var intensity = props.celestialBody.intensity; // Distance is intensity x distanceMultiplier (use generally for stars)
  var color = props.celestialBody.color || "#7d7d7d"; // Color of celestial object
  var texture = props.celestialBody.texture || ""; // Texture (generally for stars)

  // Check center
  var centerArray = (props.celestialBody.center).split(" ", 3);
  if (isNaN(parseFloat(centerArray[0])) === false && isNaN(parseFloat(centerArray[1])) === false && isNaN(parseFloat(centerArray[2])) === false) {
    //Center are valid coordinates
    center = props.celestialBody.center;
  } else {
    // Not valid coordinates, searchCelestialBodyArray

  }

  //Change returned values
  if (intensity) {
    //Return bright celestialBody
    //This is done like this and not by changing values of the light parameter because it's less efficient to make each celestialBody a possible light source
    return (
      <a-entity class="BodyWrapper" id={ name+"Wrapper" } position={ center } rotation={ "0 " + position + " 0" } >
        <a-animation attribute="rotation" to={ "0 " + (parseFloat(position + 360)).toString() + " 0" } repeat="indefinite" easing="linear" dur={(parseFloat(period) * animationSpeed).toString()}></a-animation>
        <a-sphere class="celestialBody" id={ name } position={ radius + " 0 0" } scale={ scale + " " + scale + " " + scale } material={ "color:" + color + "; emissive:" + color + "; emissiveIntensity" + intensity} geometry=""
          shadow="" light={ "type: point; castShadow:true; color:" + color + "; groundColor:" + color + "; intensity:" + intensity + "; distance:" + (parseFloat(intensity) * distanceMultiplier).toString() }></a-sphere>
      </a-entity>

    )
  } else {
    //Return default celestialBody
    return(
      <a-entity class="BodyWrapper" id={ name+"Wrapper" } position={ center } rotation={ "0 " + position + " 0" } >
        <a-animation attribute="rotation" to={ "0 " + (parseFloat(position + 360)).toString() + " 0" } repeat="indefinite" easing="linear" dur={(parseFloat(period) * animationSpeed).toString()}></a-animation>
        <a-sphere class="celestialBody" id={ name } position={ radius + " 0 0" } scale={ scale + " " + scale + " " + scale } material={ "color:" + color } geometry="" shadow=""></a-sphere>
      </a-entity>
    )
  }
}
