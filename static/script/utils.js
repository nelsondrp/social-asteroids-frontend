axios.defaults.withCredentials = true;

async function getEntryLinks(){
    var linksUnparsed = sessionStorage.getItem("entryLinks");

    if(linksUnparsed == null)
    {
        await axios.get('http://localhost:8080/api/home')
        .then(function(response)
        {
            sessionStorage.setItem("entryLinks",JSON.stringify(response.data));
            linksUnparsed = sessionStorage.getItem("entryLinks");
        })
        .catch(function(error)
        {
            console.log(error.response.data);
        });
    }
    return JSON.parse(linksUnparsed)._links;
}

function storeEntryLinks(links){
    sessionStorage.setItem("entryLinks",JSON.stringify(links));
}

function createEntryLinksStorage(){
    axios.get('http://localhost:8080/api/home')
        .then(function(response)
        {
            sessionStorage.setItem("entryLinks",JSON.stringify(response.data));
            return "finished";
        })
        .catch(function(error)
        {
            console.log(error.response.data);
        });
}

function getHrefOf(links, relation){
    var href;

    links.forEach(link => {
        
        if(link.rel == relation){
            href = link.href;
        }
    })

    return href;
}

function handleError(status){
    if(status == 403 || status == 401){
        location.href = "../index.html";
    }

    if(status == 404){
        location.href = "../index.html";
    }
}