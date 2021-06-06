//////////////////////////////////////////////////////////////////////////////////////////////////
function self_reset_password(token,url0){
document.getElementById("status").innerHTML="Wait ... <img src='images/wait.gif' >";
var username=document.getElementById("username").value;
username=calcMD5(username);
var url="password_mode/reset_pwd?t="+token+"&username="+username;
_recover_password("status",url,"xxx('"+url0+"')");
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function xxx(url0){
document.getElementById("username").disabled = true; 
document.getElementById("bt_reset_password").disabled = true; 
window.location.replace(url0);
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function member_change_password(token,url0){
document.getElementById("status").innerHTML="Wait ... <img src='images/wait.gif' >";
var password=document.getElementById("new_pwd").value;
var password2=document.getElementById("confirm_pwd").value;
if(password==password2){
if((password.length<8)||(password.length>20)){
document.getElementById("status").innerHTML="<i>Use password length from 8 to 20 Characters</i>";	
return;
}
document.getElementById("status").innerHTML="Wait ... <img src='images/wait.gif' >";
if(is_complex(password)){
   var new_pwd=calcMD5(password);
   var url="password_mode/change_pwd?t="+token+"&new_pwd="+new_pwd;
   _recover_password("status",url,"yyy('"+url0+"')");
}
else{
document.getElementById("status").innerHTML="<i>Use AlphaNumeric characters i.e <b>[A through Z] </b>,<b>[a through z]</b> , <b>[0 through 9] <font color='red'>and</font> </b> <br/>  Nonalphanumeric characters e.g <b> ~!@#$%^&*_-+=`|\(){}[]:;'<>,.?/ </b></b></i> </b> ";
    }
}
else{
document.getElementById("status").innerHTML="<i><font color='red'> Password and Confirm Password must match </font></i>";
   }
}
//////////////////////////////////////////////////////////////////////////////////////////////////
function yyy(url0){
document.getElementById("new_pwd").disabled = true; 
document.getElementById("confirm_pwd").disabled = true; 
window.location.replace(url0);
}
///////////////////////////////////////////////////////////////////////////////////////////////////
