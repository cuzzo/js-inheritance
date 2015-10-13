#! /usr/bin/env node

var assert = require("assert");

/**
 * Define Projectile here.
 *
 * Needs three members:
 *
 * @_type -> string -> type of projectile.
 * @_speed -> float -> how quickly the projectile travels.
 * @_distance -> float -> how far the projectile has traveled.
 */
function Projectile(type, speed) {
  this._distance = 0;
  this._type = type;
  this._speed = speed;
}


/**
 * Define Projectile::travel here.
 *
 * It takes one argument: time.
 */
Projectile.prototype.travel = function(time) {
  this._distance += time * this._speed;
};

Projectile.prototype.get_distance_traveled = function() {
  return this._distance;
};


function Rocket(type) {
  Projectile.call(this, type, 25);
}
Rocket.prototype = Projectile.prototype;

function Missile(type) {
  Projectile.call(this, type, 1.5);
}
Missile.prototype = Projectile.prototype;


if (require.main === module) {
  var rocket = new Rocket("Ares V"),
      missile = new Missile("MIM 104 Patriot");

  rocket.travel(2);
  missile.travel(2);

  assert.equal(rocket.get_distance_traveled(), 50);
  assert.equal(missile.get_distance_traveled(), 3);

  rocket.travel(1);

  assert.equal(rocket.get_distance_traveled(), 75);
}
