var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var password = document.getElementById('password');
var btnSignup = document.getElementById('btnSignup');
var incorect = document.getElementById('incorect')
var corect = document.getElementById('corect')







var allinformation = [];
if(localStorage.getItem('allinformation') !=null){
     allinformation =JSON.parse(localStorage.getItem('allinformation'))
}


// 

btnSignup.onclick =  function(){
      if(userName.value =='' || userEmail.value == ''   || password.value ==''){
            incorect.innerHTML = 'All inputs is required'
            corect.innerHTML = ''
      }else{
            var newData = {
                  userName:userName.value,
                  userEmail:userEmail.value,
                  password:password.value,
                  
            }
            allinformation.push(newData)
            localStorage.setItem('allinformation',JSON.stringify(allinformation))
            console.log(newData)
            corect.innerHTML = 'success'
            incorect.innerHTML = ''
      }

}


