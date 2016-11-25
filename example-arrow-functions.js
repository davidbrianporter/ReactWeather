 var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
//   console.log('fe ln next');
// });
//
// names.forEach((name) => {
//   console.log('arrowfunc', name);
//   console.log(names.indexOf(name));
// });
//
// names.forEach((name) => console.log('arrowfunc', name));
//
// names.forEach((name) => console.log(names.indexOf(name)));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('David'));

// var person = {
//   name: 'Andrew',
//   greet: function () {
//     names.forEach(function (name) {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// var persona = {
//   name: 'Andrew',
//   greet: function () {
//     names.forEach( (name) => {
//       console.log(this.name + ' says hi to ' + name)
//     });
//   }
// };
//
// person.greet();
// persona.greet();

function add (a, b) {
  return a + b;
}

var addStatement =  (a, b) => {
   return a + b;
 };

var addExpression = (a, b) => a + b;

console.log(addStatement(1,3));
console.log(addExpression(9,9));
