var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var password = document.getElementById('password');
var btnSignup = document.getElementById('btnSignup');
var incorect = document.getElementById('incorect')
var corect = document.getElementById('corect')
var btnLogin = document.getElementById('btnLogin')
var shoWolcome = document.getElementById('shoWolcome')







var allinformation = [];
if(localStorage.getItem('allinformation') !=null){
     allinformation =JSON.parse(localStorage.getItem('allinformation'))
}
console.log(allinformation)
function loginEmpty(){
      if( userEmail.value == ''   || password.value ==''){
            return false;
      }
}
btnLogin.onclick = function(){
      if(loginEmpty()== false){
            incorect.innerHTML = 'All inputs is required'
      }else{
            var email = userEmail.value;
            var pass = password.value;
            for(var i = 0 ; i<allinformation.length ; i++){
                  if(allinformation[i].userEmail == email && allinformation[i].password == pass){
                        localStorage.setItem('userName', JSON.stringify(allinformation[i].userName))
                        btnLogin.setAttribute('href','./home.html')
                  }else{
                        incorect.innerHTML ='email or passord not corect'
                  }
            }
      }
       

}
// 

