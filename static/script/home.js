axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';

document.getElementById('logout-button').addEventListener("click", logout);

var id = document.getElementById('id');
var username = document.getElementById('username');
var email = document.getElementById('email');

axios.get('http://localhost:8080/api/user/get/1')
        .then(function(response){
            console.log(response.data);
            drawData(response.data);
        })
        .catch(function(error){
            console.log(error);
        });

function drawData(user){
    id.innerText = user.id;
    username.innerText = user.username;
    email.innerText = user.email;
}

function logout(){
    axios.get('http://localhost:8080/api/auth/logout')
        .then(function(response){
            location.href = '../index.html';
        })
        .catch(function(error){
            console.log(error);
        });
}

