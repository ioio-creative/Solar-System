import React from 'react';
import '../App.css';

// User defined variables
var animationSpeed = 5;
var distanceMultiplier = 20;

export class RenderSystems extends React.Component {
  render() {
    var planetarySystemsFile = this.props.planetarySystemsFile;
    var objectsToRender = planetarySystemsFile.CelestialObjects.map (
      function(objectToRender) {
        return <RenderCelestialBody celestialBody={ objectToRender }/>
      }
    )
    return (
      <React.Fragment>
        { objectsToRender }
      </React.Fragment>
    )
  }
}

class RenderCelestialBody extends React.Component {
  render() {
    //Initialise celestial Body values
    var name = this.props.celestialBody.name.toLowerCase() || "a_celestial_body"; // Name of celestial body
    var scale = this.props.celestialBody.scale || "1"; // Scale of celestial body
    var center = this.props.celestialBody.center || "0 0 0"; //Center of celestial body, can take name of another object
    var radius = this.props.celestialBody.radius || "1"; //Radius of the celestial object away from the center object
    var position = this.props.celestialBody.position || "0"; //Start position in orbit
    var rotation = this.props.celestialBody.rotation || "0"; //Period of self roation in ms/days whatever you choose
    var period = this.props.celestialBody.period || "100"; //Period of orbit in ms/days whatever you choose
    var intensity = this.props.celestialBody.intensity; // Distance is intensity x distanceMultiplier (use generally for stars)
    var color = this.props.celestialBody.color || "#ffffff"; // Color of celestial object
    var texture = this.props.celestialBody.texture || ""; // Texture (generally for stars)

    // Check center
    var centerArray = (center).split(" ", 3);
    if (isNaN(parseFloat(centerArray[0])) === false && isNaN(parseFloat(centerArray[1])) === false && isNaN(parseFloat(centerArray[2])) === false) {
      //Center is a valid coordinate
      // Do nothing
    } else {
      // Not valid coordinates, searchCelestialBodyArray

    }

    //Change returned values
    if (intensity) {
      //Return bright celestialBody
      //This is done like this and not by changing values of the light parameter because it's less efficient to make each celestialBody a possible light source
      return (
        <a-entity class="bodyWrapper" id={ name+"Wrapper" } position={ center } rotation={ "0 " + position + " 0" } >
          <a-animation attribute="rotation" to={ "0 " + (parseFloat(position + 360)).toString() + " 0" } repeat="indefinite" easing="linear" dur={(parseFloat(rotation) * animationSpeed).toString()}></a-animation>
          <a-sphere class="celestialBody" id={ name } position={ radius + " 0 0" } scale={ scale + " " + scale + " " + scale } material={ "color:" + color + "; emissive:" + color + "; emissiveIntensity" + intensity} geometry=""
            shadow="" light={ "type: point; castShadow:true; color:" + color + "; groundColor:" + color + "; intensity:" + intensity + "; distance:" + (parseFloat(intensity) * distanceMultiplier).toString() }></a-sphere>
            <a-animation attribute="rotation" to={ "0 360 0" } repeat="indefinite" easing="linear" dur={(parseFloat(period) * animationSpeed).toString()}></a-animation>
        </a-entity>

      )
    } else {
      //Return default celestialBody
      return(
        <a-entity class="bodyWrapper" id={ name+"Wrapper" } position={ center } rotation={ "0 " + position + " 0" } >
          <a-animation attribute="rotation" to={ "0 " + (parseFloat(position + 360)).toString() + " 0" } repeat="indefinite" easing="linear" dur={(parseFloat(rotation) * animationSpeed).toString()}></a-animation>
          <a-sphere class="celestialBody" id={ name } position={ radius + " 0 0" } scale={ scale + " " + scale + " " + scale } material={ "color:" + color + "; emissive:" + color + "; emissiveIntensity" + intensity} geometry=""
            shadow=""></a-sphere>
            <a-animation attribute="rotation" to={ "0 360 0" } repeat="indefinite" easing="linear" dur={(parseFloat(period) * animationSpeed).toString()}></a-animation>
        </a-entity>
      )
    }
  }
}
