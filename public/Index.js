async function Submit_request(){

    var name = document.getElementById('name').value;
    var instagram = document.getElementById('IG_Handle').value;
    var question = document.getElementById('Question').value;
    
    var url = encodeURI(`http://localhost/api/create?name=${name}&instagram=${instagram}&question=${question}`);
    console.log(url);

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.send();
        

}