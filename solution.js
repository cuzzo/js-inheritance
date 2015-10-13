function Projectile(type, speed) {
  this._distance = 0;
  this._type = type;
  this._speed = speed;
}

Projectile.prototype.travel = function(time) {
  this._distance += time * this._speed;
};
