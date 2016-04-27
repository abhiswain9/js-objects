var message = '';
var students;

function print(message) {
  document.write("<section>" + message + "</section>");
}

for(var i=0 ; i<students.length ; i++){
  student = students[i];
  message += "<h1> Name: " + student.name + "</h1>";
  message += "<h4> Track : " + student.track + "</h4>";
  message += "<h5> Achievements: " + student.achievements + "</h5>";
  message += "<h5> Points: " + student.points + "</h5>";

}

print(message);
