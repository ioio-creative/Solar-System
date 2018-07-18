const speedMultiplier = 5;

class Planet {
  constructor (name, color, scale, x, y, z, rotationX, rotationY, rotationZ, relativePeriod) {
    this._name = name;
    this._color = color;
    this._scale = scale;
    this._x = x;
    this._y = y;
    this._z = z;
    this._rotationX = rotationX;
    this._rotationY = rotationY;
    this._rotationZ = rotationZ;
    this.relativePeriod = relativePeriod;
  }
}

const Mercury = new Planet("Mercury", "#707070", )

window.onload = function(){
};
