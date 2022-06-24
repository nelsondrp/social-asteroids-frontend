axios.defaults.withCredentials = true;

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
    getFormData();
    axios.post('http://localhost:8080/api/auth/login',user)
        .then(function(response){
            console.log(response);
            location.href = '../home.html';
        })
        .catch(function(error){
            console.log(error);
            alert("Usuário e/ou senha incorreto(s)");
        })
}
