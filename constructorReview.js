//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

var animal = function(species, name, legs, color, food){
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

person = function(name, age, height, gender) {
  return {
    name: name,
    age: age,
    height: height,
    gender:gender
  };
}


//Create a animal array and a person array.

arrAnimal = [];
arrPerson = [];


//Create two instances of Animal and push those into your animal array
arrAnimal.push(new animal('especie1', 'Puerco', 4, 'red', ['pizza', 'hamburger','fideos','guatitas']));
arrAnimal.push(new animal('especie2', 'Avestruz', 2, 'blue', ['tomatoe', 'sushi']));
// console.log(arrAnimal);


//Create two instances of person and push those into your person array.
arrPerson.push(person('Jorge', 31, 1.77, 'male'));
arrPerson.push(person('Camila', 28, 1.60, 'female'));
// console.log(arrPerson);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

animal.prototype.eat = function() {
  var rnd = Math.floor(Math.random() * this.food.length);
  return console.log(this.name + ' ate ' + this.food[rnd]);
}

arrAnimal[1].eat();


//At this point, if we wanted to add something to every istance of person could we?

  //No, because is not using Prototype



/*
  1) What happens when you use the 'new' keyword to call a Constructor function?  Creates a new object with the properties from the function
  2) What's a good way to describe the keyword 'this'  -> it's like a pronoun in a sentence
  3) Can a normal function which creates an object and then returns that object use the prototype? -> no
  4) What happens if you forget to use 'new' when calling a constructor? ->
*/
