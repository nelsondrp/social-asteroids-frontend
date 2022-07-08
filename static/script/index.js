axios.defaults.withCredentials = true;

welcome();

function welcome(){
    axios.get('http://localhost:8080/api/home')
        .then(function(response){
            sessionStorage.setItem("entryLinks",JSON.stringify(response.data));
        })
        .catch(function(error){
            handleError(error.response.status);
        });
}