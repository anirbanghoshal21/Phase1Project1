	var fs = require('fs');
const readline=require('readline');
const r1=readline.createInterface({
input: process.stdin,
output:process.stdout
});

var student_name,student_class,student_section;
try{
r1.question('Enter Student name? ',function(name){
student_name=name;

r1.question('Enter Student class? ',function(s_class){
student_class=s_class;

r1.question('Enter Student section? ',function(section){
student_section=section;

var record=student_name+'    '+student_class+'    '+student_section+"\r\n";
fs.appendFile('student.txt',record,function(err){
if(err) throw err;
console.log('Student Added');
}); 
r1.close();
});
});
});
}catch(err){console.error(err);}
