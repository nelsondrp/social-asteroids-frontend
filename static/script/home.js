axios.defaults.withCredentials = true;

document.getElementById('logout-button').addEventListener("click", logout);

var id = document.getElementById('id');
var username = document.getElementById('username');
var email = document.getElementById('email');

entryLinks = JSON.parse(sessionStorage.getItem("entryLinks"))._links;

axios.get(entryLinks.activeUser.href)
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
    axios.get(entryLinks.logout.href)
        .then(function(response){
            location.href = '../index.html';
        })
        .catch(function(error){
            console.log(error);
        });
}

