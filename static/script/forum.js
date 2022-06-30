//const table = new JSTable("#forum");
const entryLinks = getEntryLinks();
var threads;

getThreads();

function getThreads(){
    axios.get(entryLinks.threads.href)
            .then(function(response){
                threads = response.data.content;
                populateTable();
            })
            .catch(function(error){
                console.log(error);
            });
}


function populateTable(){
    const tbody = document.getElementById("tbody");
    var authorName;

    const tableData = threads.map((thread) => {
        var title = thread.title
        var authorName = thread.authorName
        var updatedAt = new Intl.DateTimeFormat('en', {dateStyle : "short",timeStyle : 'short',hour12 : false}).format(new Date(thread.updatedAt));
        var postsCount = thread.postsCount

        return `
            <tr>
            <td id = "thread"><a href = ${getHrefOf(thread.links, "self")}> ${title} </a></td>
            <td id = "author"><a href = ${getHrefOf(thread.links, "author")}> ${authorName} </a></td>
            <td id = "updatedAt">${updatedAt}</td>
            <td id = "postsNum">${postsCount}</td>
            </tr>`;
    }).join('');

    tbody.innerHTML = tableData;
}