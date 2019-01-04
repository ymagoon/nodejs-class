// primitive types - string, number, boolean, udnefined, null, symbol
// reference values - object -> array

var name = 'Yitzhak';
console.log(name);

var secondName = name;
console.log(secondName);

// since string primitive types act as 'byvalue', even though name changes, secondName will still output 'Yitzhak'
name = 'Chris';
console.log(secondName);

var person = {
	age: 28,
	name: 'Yitzhak',
	hobbies: ['Vollyball','Programming']
};
// output the person object
console.log(person);

var secondPerson = person;
// secondPerson will be a copy of person
console.log(secondPerson);

person.age = 29;

// secondPerson.name changes to 29! This is because objects are stored as references
console.log(secondPerson);

// primitive values are stored on the stack. The stack is the physicial place in memory the values are stored.
// reference values are stored on the heap. The heap can store much more information. This type of memory is perfect for large data or data that changes frequently.

// by using the assign method, we can actually copy the object instead of making a reference to the original object
var thirdPerson = Object.assign({}, person);
person.age = 30;
// person now has an age of 30, but thirdPerson still has an age of 29
console.log(person);
console.log(thirdPerson);

// will output hobbies with all 3 hobies even though we took a copy of the person object. Object assign doesn't create a deep clone, arrays are also byref
// so the copy is still pointed to the place in memory that is storing the array
person.hobbies.push('Reading');
console.log(thirdPerson);