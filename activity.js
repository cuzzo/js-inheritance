#! /usr/bin/env node

/**
 * NASA needs your help!
 *
 * The Projectile constructor and some of its methods have mysteriously
 * vanished from the codebase. The deadline for the software is in...
 * 5 minutes!
 *
 * Please hurry and read the commented documentation below and implement
 * the Projectile constructor and its travel method in time.
 * The fate of the Mars mission depends on it!
 */

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

/**
 * Define Projectile::travel here.
 *
 * It takes one argument: time.
 */

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
