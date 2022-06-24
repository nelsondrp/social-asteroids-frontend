axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

let user = {
    username : "",
    email : "",
    password : ""
}

document.getElementById('signup-button').addEventListener("click", signup);

function getFormData(){
    user.email = document.getElementById('user-email').value;
    user.username = document.getElementById('user-username').value;
    user.password = document.getElementById('user-password').value;
}

function signup(){
    getFormData();
    axios.post('http://localhost:8080/api/auth/signup', user)
        .then(function(response){
            location.href = '../login.html';
        })
        .catch(function(error){
            console.log(error)
            alert("Nome de usuário ou email já existentes");
        });
}