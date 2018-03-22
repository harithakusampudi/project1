var studetails = [
  {name: 'divya', age: '22', subject: ['java']},
  {name: 'ray', age: '28', subject: ['python', 'java', 'js']},
  {name: 'santosh', age: '20', subject: ['java', 'js']},
];

//var var1, var2;
var count = 0;
//for (var student in studetails) {
for (var i = 0; i < studetails.length; ++i) {
  var subj = studetails[i].subject;
  for (var j = 0; j < subj.length; ++j) {
    if (subj[j] == 'java') {
      count += 1;
    }
  }
}
console.log(count);

/*var output = [];
for (var i = 0; i < studetails.length; ++i) {
  output.push(studetails[i].subject);
}
console.log(output);
*/
