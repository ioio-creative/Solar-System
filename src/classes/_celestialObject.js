import 'aframe'
import React from 'react';
import '../App.css';

var animationSpeed = 5;

//Name:string, rotation: int, scale:int, color:string, star:string, period:int

export function celestialObject(_name, _rotation = 0, _scale = 1, _color = "#ffffff", _radius = 0, _star = "undefined", _period = 10) {
  this.name = (_name.toString()).toLowerCase();
  this.rotation = _rotation;
  this.scale = _scale.toString();
  this.color = _color.toString();
  this.radius = _radius;
  this.star = (_star.toString()).toLowerCase();
  this.period = _period;
}

export function RenderCelestialObject(props) {
  return (
    <a-entity class="objectWrapper" id={ props.celestialObject.name.toLowerCase()+"Wrapper" } rotation={ "0 " + props.celestialObject.rotation.toString() + " 0" }>
      <a-animation attribute="rotation" to={ "0 " + (props.celestialObject.rotation + 360).toString() + " 0" } repeat="indefinite" easing="linear" dur={(props.celestialObject.period * animationSpeed).toString()}></a-animation>
      <a-sphere class="celestialObject" id={ props.celestialObject.name.toLowerCase() } position={ props.celestialObject.radius + " 0 0" } scale={ props.celestialObject.scale + " " + props.celestialObject.scale + " " + props.celestialObject.scale } material={ "color:" + props.celestialObject.color } geometry="" shadow=""></a-sphere>
    </a-entity>
  );
}
