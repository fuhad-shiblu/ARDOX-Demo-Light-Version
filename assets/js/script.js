let fuhadShiblu_inUser = document.querySelector('.fuhadShiblu_inUser');
let fuhadShiblu_inPass = document.querySelector('.fuhadShiblu_inPass');
let fuhadShiblu_btns = document.querySelector('.fuhadShiblu_btns');
let fuhadShiblu_userErr = document.querySelector('.fuhadShiblu_userErr');
let fuhadShiblu_passErr = document.querySelector('.fuhadShiblu_passErr');

fuhadShiblu_btns.addEventListener('click' , (e)=>{
    e.preventDefault()
    if(fuhadShiblu_inUser.value == ''){
        fuhadShiblu_userErr.innerHTML = 'Please Enter Your Username'
        fuhadShiblu_passErr.innerHTML = ''
    }else if(fuhadShiblu_inPass.value == ''){
        fuhadShiblu_passErr.innerHTML = 'Please Enter Your Password'
        fuhadShiblu_userErr.innerHTML = ''
    }else{
        fuhadShiblu_passErr.innerHTML = ''
        fuhadShiblu_userErr.innerHTML = ''
        alert('Test Login Successfull !')
    }
})