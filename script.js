

var object1= 
{
    School:"Cuyahoga Community College", 
    Degree:"Associates Degree", 
    Semester:2017, 
    Class:"IT Interactive Web Programming", 
    Students:[
    {firstname:"Daron",lastname:"Seals", Age:22},
    {firstname:"Ronny",lastname:"Miles", Age:28},
    {firstname:"Nearson",lastname:"Carry", Age:23},
    {firstname:"Vearana",lastname:"Lebarson", Age:21},
    {firstname:"Diane",lastname:"Sivorena", Age:35},
    {firstname:"Mark",lastname:"Tebarassi", Age:76},
    {firstname:"Sara",lastname:"Cheu", Age:44},
    {firstname:"Vanessa",lastname:"Hicks", Age:18},
    {firstname:"Candy", lastname:"Heart", Age:20},
    {firstname:"Susan",lastname:"Dawson",Age:18}
  ]};

function displayMessage(obj)
 {
   alert(obj.School);
   alert(obj.Degree);
   alert(obj.Semester);
   alert(obj.Class);

   alert(obj.Students[0].firstname);
   alert(obj.Students[0].lastname);
   alert(obj.Students[0].Age);

   alert(obj.Students[1].firstname);
   alert(obj.Students[1].lastname);
   alert(obj.Students[1].Age);

   alert(obj.Students[2].firstname);
   alert(obj.Students[2].lastname);
   alert(obj.Students[2].Age);

   alert(obj.Students[3].firstname);
   alert(obj.Students[3].lastname);
   alert(obj.Students[3].Age);

   alert(obj.Students[4].firstname);
   alert(obj.Students[4].lastname);
   alert(obj.Students[4].Age);
  
   alert(obj.Students[5].firstname);
   alert(obj.Students[5].lastname);
   alert(obj.Students[5].Age);

   alert(obj.Students[6].firstname);
   alert(obj.Students[6].lastname);
   alert(obj.Students[6].Age);

   alert(obj.Students[7].firstname);
   alert(obj.Students[7].lastname);
   alert(obj.Students[7].Age);

   alert(obj.Students[8].firstname);
   alert(obj.Students[8].lastname);
   alert(obj.Students[8].Age);

   alert(obj.Students[9].firstname);
   alert(obj.Students[9].lastname);
   alert(obj.Students[9].Age);


  for (var i = 0; i < obj.Students.length; i++) {
    var name = obj.Students[i];
    console.log("The student's first name is" + " " + name.firstname + " " + name.lastname + " " + name.Age);
  }
}

$(document).ready(function() {
  $("#btn1").click(function() {
    displayMessage(object1);
  });
});