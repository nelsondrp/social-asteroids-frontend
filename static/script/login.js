let user = {
    username : "",
    password : ""
}

document.getElementById('login-button').addEventListener("click", login);

function getFormData(){
    user.username = document.getElementById('user-username').value;
    user.password = document.getElementById('user-password').value;
}

function login(){
    getEntryLinks().then(entryLinks =>{
        getFormData();
        
        axios.post(entryLinks.login.href, user)
        .then(function(response){
            location.href = '../home.html';
        })
        .catch(function(error){
            console.log(error);
            alert("Usuario e/ou senha incorreto(s)");
        })
     });

    
}
