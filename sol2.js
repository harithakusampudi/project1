var studetails = [
  {name: 'divya', age: '22', subject: ['java']},
  {name: 'ray', age: '28', subject: ['python', 'java', 'js']},
  {name: 'santosh', age: '20', subject: ['java', 'js']},
];

//var var1;
//var var2;
//var count=0;
//console.log('[');
for (var i = 0; i < studetails.length; ++i) {
  var aze = studetails[i].age;
  //var aze = studetails.age;
  //  for (var j = 0; j < subj.length; ++j) {
  if (aze >= '21') {
    //  for(var2 in age){
    var nam = studetails[i].name;
    console.log(nam);
  }
  //console.log(',');
  //}
}
//console.log(']');
