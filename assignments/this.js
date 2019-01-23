/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this)

// Principle 2

// code example for Implicit Binding

const lydster = {
    name: 'Lydia',
    loves: function() {
        console.log(`${this.name} is very into learning about this.`)
    }
}
lydster.loves()



// Principle 3

// code example for New Binding
//sweet constructor function
function CrankyPerson(name) {
    this.person = name;
    this.buddy = name;
    this.argument = "I hate phone calls!";
    this.shout = function() {
      console.log(`I'm mad at ${this.buddy} because ${this.argument}`)
    }
  }

  const jerry = new CrankyPerson('shawn');
  jerry.shout();

// Principle 4

// code example for Explicit Binding

const ratking = {
    name: 'Ratty'
  }
const favoriteFoods = ['pizza', 'cupcakes', 'sangria'];
function introduce(food1, food2, food3) {
    console.log(`Hello!  My name is ${this.name}! I'm going to help myself to some of your ${food1}, ${food2}, and ${food3}`)
  }

introduce.call(ratking, ...favoriteFoods) 