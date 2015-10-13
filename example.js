#! /usr/bin/env node

var assert = require("assert");

function Projectile(type, speed) {
  this._distance = 0;
  this._type = type;
  this._speed = speed;
}

Projectile.prototype.travel = function(time) {
  this._distance += time * this._speed;
};

Projectile.prototype.get_traveled_distance = function() {
  return this._distance;
};

function Rocket(type) {
  Projectile.call(this, type, 25);
}
Rocket.prototype = Projectile.prototype;

function Missile(type) {
  // missing instantiation code goes here.
}
Missile.prototype = Projectile.prototype;

var rocket = new Rocket("Ares V"),
    missile = new Missile("Falcon IV");

rocket.travel(2);
missile.travel(2);

assert.equal(rocket.get_traveled_distance(), 50);
assert.equal(missile.get_traveled_distance(), 10);
