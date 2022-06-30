axios.defaults.withCredentials = true;

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
    entryLinks = JSON.parse(sessionStorage.getItem("entryLinks"))._links;

    getFormData();
    axios.post(entryLinks.signup.href, user)
        .then(function(response){
            location.href = '../login.html';
        })
        .catch(function(error){
            console.log(error.response.data)
            alert(getErrorMessage(error.response.data));
        });
}


function getErrorMessage(errorObject){
    return "password " + errorObject.password + "\r\n" +  "username " + errorObject.username + "\r\n" +  "email " + errorObject.email;
}