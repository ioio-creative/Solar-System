import React from 'react';
import '../App.css';

// User defined variables
var animationMultiplier = 35; // Bigger is slower
var distanceMultiplier = 30;

export class RenderBodies extends React.Component {
  render() {
    var planetaryBodies = this.props.planetaryBodies;
    var bodiesToRender = planetaryBodies.map (
      function(objectToRender, index) {
        return <RenderCelestialBody planetarySystemsFile = { planetaryBodies } celestialBody={ objectToRender } key={ planetaryBodies[index].name }/>
      }
    )
    return (
      <React.Fragment>
        { bodiesToRender }
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
    var intensity = this.props.celestialBody.intensity || ""; // Distance is intensity x distanceMultiplier (use generally for stars)
    var color = this.props.celestialBody.color || "#ffffff"; // Color of celestial object
    var texture = this.props.celestialBody.texture || ""; // Texture (generally for stars)

    //Props related variables
    var planetarySystemsFile = this.props.planetarySystemsFile;

    // Check center
    var centerArray = (center).split(" ", 3);
    if (isNaN(parseFloat(centerArray[0])) === false && isNaN(parseFloat(centerArray[1])) === false && isNaN(parseFloat(centerArray[2])) === false) {
      //Center is a valid coordinate
      // Do nothing
    } else {
      // Not valid coordinates, do nothing and return, probably already rendered by parent CelestialObject
      return(null);
    }

    // Search for orbitingSubBodies and setup for rendering later
    var orbitingSubBodies = [];
    var i;
    for (i = 0; i < planetarySystemsFile.length; i++) {
      //Search for CelestialObjects that orbit the currently rendering CelestialObject
      if (planetarySystemsFile[i].center.toLowerCase() === name) {
        //Match found, add CelestialObject to the orbitingSubBodies array
        orbitingSubBodies[i] = planetarySystemsFile[i];

        //Scale size back up or down depending on scale of parent body
        orbitingSubBodies[i].scale = (parseFloat(orbitingSubBodies[i].scale) / parseFloat(scale)).toString();
      }
    }

    //Change returned values
    if (intensity !== "") {
      //Return bright celestialBody
      //This is done like this and not by changing values of the light parameter because it's less efficient to make each celestialBody a possible light source
      return (
        <a-entity id={ name+"Wrapper" } position={ center } rotation = { "0 " + position + " 0" } animation={ "property:rotation;to:0 " + (parseFloat(position) + 360).toString() + " 0;dur:" +
          (parseFloat(period) * animationMultiplier).toString() + ";easing:linear;loop:true" }>
          <a-sphere id={ name } position={ radius + " 0 0" } scale={ scale + " " + scale + " " + scale } material={ "color:" + color + ";emissive:" + color }
            light={"type:point;castShadow:true;color:" + color + ";groundColor:" + color + ";intensity:" + intensity + ";distance:" + (parseFloat(intensity) * distanceMultiplier).toString() } geometry="">
              <RenderBodies planetaryBodies={ orbitingSubBodies } />
            </a-sphere>
        </a-entity>
      )
    } else {
      //Return default celestialBody
      return(
        <a-entity id={ name+"Wrapper" } position={ center } rotation = { "0 " + position + " 0" } animation={ "property:rotation;to:0 " + (parseFloat(position) + 360).toString() + " 0;dur:" +
          (parseFloat(period) * animationMultiplier).toString() + ";easing:linear;loop:true" }>
          <a-sphere id={ name } position={ radius + " 0 0" } scale={ scale + " " + scale + " " + scale } material={ "color:" + color } geometry="" shadow="">
            <RenderBodies planetaryBodies={ orbitingSubBodies } />
          </a-sphere>
        </a-entity>
      )
    }
  }
}

//CelestialObject with self-rotation
{/* <a-sphere id={ name } position={ radius + " 0 0" } scale={ scale + " " + scale + " " + scale } material={ "color:" + color } animation={ "property:rotation;to:0 " + (parseFloat(position) + 360).toString() +
  " 0;dur:" + (parseFloat(rotation) * animationMultiplier).toString() + ";easing:linear;loop:true" } geometry="" shadow=""></a-sphere> */}
