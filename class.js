

var student = {id:21 , phone: 19244, Name:'zub'};
var student2 = {id:211 , phone: 18882445857, Name:'sub'};

var phoneNo = student.phone;
var Name = student['Name'];
var idClass = 'id';
var classId = student[idClass];

student2.phone = 1620105752;
student2['Name'] = 'zubair bin ferdous';
student2.sky = 'jani na';

console.log(student2);
console.log(phoneNo);
console.log(Name);
console.log(classId);
