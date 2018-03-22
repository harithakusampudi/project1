var lodash = require('lodash');
var studetails = [
  {name: 'divya', age: '22', subject: ['java']},
  {name: 'ray', age: '28', subject: ['python', 'java', 'js']},
  {name: 'santosh', age: '20', subject: ['java', 'js']},
];
//var var1;
var arr = [];
//var uniq = [];
for (var i = 0; i < studetails.length; ++i) {
  arr.push(studetails[i].subject);
}
var arr1 = lodash.flatten(arr);


var uni = lodash.uniq(arr1);
console.log(uni);
