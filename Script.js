const calcy=(()=>{
    let maths=document.getElementById("maths").value;
    let computer=document.getElementById("computer").value;
    let Physics=document.getElementById("Physics").value;
    let English=document.getElementById("English").value;
    let grade="";
let totalgrade= parseFloat(maths)+parseFloat(computer)+parseFloat(Physics)+parseFloat(English);

// alert(totalgrade);
let Perce=(totalgrade/400)*4;
// alert(Perce);
if(Perce<=100 && Perce>=80){
    grade="A";
}else if(Perce<=79 &&Perce>=60){
    grade="B"
}
else if(Perce<=59 &&Perce>=40){
    grade="C"
}else{
    grade="F"
}
document.getElementById("Showdata").innerHTML=`Out of 400 your total is ${totalgrade}  and percentage is ${Perce} your grade is ${grade}`

})