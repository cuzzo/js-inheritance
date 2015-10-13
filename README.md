# Objective
* Today you will learn about Prototypes and inheritance in JavaScript.
* By the end of this lesson, you will be able to write Object Oriented code in JavaScript.

# What the #!@*s a Prototype?
A Prototype is an object that helps functions in JavaScript behave like a Class in Ruby.

```bash
$ node
> function MyClass() {};
> MyClass.prototype;
{}
```

# So how do Prototypes work?
Let's imagining implementing the functionality of a Class without having a special language construct.

```javascript
var cat = {};
cat.sound = "meow";
var dog = {};
dog.sound = "bark";
```

In Ruby, that might look something like:

```ruby
class Mammal
  def initialize(sound)
    @sound = sound
  end
end
```

But with the JavaScript above, we don't yet have any way to enforce that all our mammal instances will have a "sound" member. A "constructor" function that programmatically creates mammals can fix that.

# What's a constructor?
* A constructor is a special type of function that creates an instance of a Class.
* In ruby, "initialize" is very similar to a constructor.
* In JavaScript, a constructor might look something like:

```javascript
function construct_mammal(sound) {
  var obj = {};
  obj.sound = sound;
  return obj;
};
var cat = construct_mammal("meow");
```

# "new" magic
* In Ruby, you define the "initialize" method, but you call it with: Mammal.new().
* Fortunately, JavaScript also has a "new" keyword.
* With the "new" keyword, in JavaScript, every function can behave as a constructor.
* But these functions are typically written with a special style.

```javascript
function Mammal(sound) {
  this.sound = sound;
}
var cat = new Mammal("meow");
```

The above is roughly equivalent to the `construct_mammal` example.

# Inheritence

```javascript
function Mammal(sound, is_happy) {
  this.sound = sound;
  this.is_happy = is_happy;
}

Mammal.prototype.speak = function() {
  console.log(this.sound);
};

function Dog(is_happy) {
  Animal.call(this, "bark", is_happy);
}
Dog.prototype = Mammal.prototype;
// ^ Biggest gotcha is assigning the child's prototype to the parent's prototype.

function Cat() {
  Animal.call(this, "meow", is_happy);
}
Cat.prototype = Mammal.prototype;

var happy_dog = new Dog(true);
var mad_cat = new Cat(false);

// Hows that helpful? Why not just instantiate Animals directly?
// happy_dog = new Animal("bark", true);
// mad_cat = new Animal("meow", false);

Dog.prototype.update = function() {
  if (this.is_happy) {
    this.wag_tail();
  }
};

Cat.prototype.update = function() {
  if (!this.is_happy) {
    this.wag_tail();
  }
};
```

In essence, a Prototype allow us to define methods (think update()) for instances created by a certain constructor (think Mammal()). It's very similar to a Class definition in Ruby.

# Closing
ES5 doesn't natively support classes or the behaviors associated with them. Prototypes give us the ability to mimmic that without too much trouble. When writing object oriented ES5 JavaScript, I'd advise using a library to make things easier, like `util.inherits` in node or [Fiber](https://github.com/linkedin/Fiber) in the browser.
