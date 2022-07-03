students=[];
function submit(){
    var N1=document.getElementById("I1").value;
    var N2=document.getElementById("I2").value;
    var N3=document.getElementById("I3").value;
    var N4=document.getElementById("I4").value;
    var N5=document.getElementById("I5").value;
    students.push(N1);
    students.push(N2);
    students.push(N3);
    students.push(N4);
    students.push(N5);
    document.getElementById("output").innerHTML=students;
    document.getElementById("submit").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}
function sort(){
    students.sort();
    document.getElementById("output").innerHTML=students;
}
