
const signinBut = () => {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    fetch('/validate', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method :'post',
        body:JSON.stringify({
            email:email,
            password:password
        })

    }).then((res)=>{
        return res.json()
    }
    ).then((data)=>{
        if(data==null){
            alert('Email or password is invalid');
        }
        else{
            alert('successful login');
            window.location.href = '/menu.html';
        }
    })

}