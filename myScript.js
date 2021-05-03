
function sayhello() {
    var name=window.text3.value;
    window.alert("The application of "+name.split('@gmail.com')+" is saved!");
    
}
//checking the input
function empty() {
    var x1=window.tex1.value;
    var x2=window.text2.value;
    var x3=window.text3.value;
    var x4=window.Username.value;
    var x5=window.text5.value;
   var check="";
    
//checking the first name
    if(x1.length==0)
    {
        document.getElementById('tex1').style.backgroundColor="red";
        check+="First name";
    }
//checking the last name
    if(x2.length==0)
    {
        document.getElementById('text2').style.backgroundColor="red";
       check=check+" ,"+"Last name";
    }
    if(x3.length==0)
    {
        document.getElementById('text3').style.backgroundColor="red";
        check=check+" ,"+"emali";
    }
    if(x4.length==0)
    {
        document.getElementById('Username').style.backgroundColor="red";
        check=check+" ,"+"Username";
    }
    if(x5.length==0)
    {
        document.getElementById('text5').style.backgroundColor="red";
        check=check+" ,"+"Password";
    }
    if(check.length!=0) {
    window.alert("the field "+check+" is empty");
    }
    
    
}
//onmousover the Application at the id text1
function myfun1(id) {
        document.getElementById(id).style.backgroundColor="white";
}
//check the before field
function myfun2() {
    var com=window.tex1.value;
     
    if(com.length==0) {
      window.alert("please enter the  First name is empty");
      document.getElementById("text2").disabled=true;
    } 
}
//check the before field
function myfun3() {
    var com=window.text2.value;
     
    if(com.length==0) {
      
        window.alert("please enter the  Last name is empty");
        document.getElementById("text3").disabled=true;
        
    }
}
//check the before field
function myfun4() {
    var com=window.text3.value;
     
    if(com.length==0) {
        window.alert("please enter the  email is empty");
        document.getElementById("Username").disabled=true;
    }
}
//check the before field
function myfun5() {
    var com=window.Username.value;
     
    if(com.length==0) {
        window.alert("please enter the  Username is empty");
        document.getElementById("text5").disabled=true;
    }
}
//check empty 
function sayhello2(id1) {
    document.getElementById(id1).disabled=false;
}
