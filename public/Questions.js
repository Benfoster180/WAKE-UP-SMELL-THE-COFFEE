


async function Fetch_Questions() { //Command collects data on the driver
    let url = ("http://localhost/api/get") //Concats the users requested driver with the main url
    let res = await fetch(url); //Calls the API
    if (res.ok) { //Checks for a sucessful API call
        window.value =  json = await res.json(); //return data as json
        return json;
    } else {
        return `HTTP error: ${res.status}`; //Error catcher
    }
};





function data_display(){
    console.log(json)
    for (let i = 0; i < json['data'].length; i++) {
        const para = document.createElement("p");
        const name = document.createTextNode(json['data'][i]['name']);
        const textname = document.createTextNode("Name: ");
        para.appendChild(textname);
        para.appendChild(name);
        const next_line = document.createElement("br");
        para.appendChild(next_line);
        const IG_Name = document.createTextNode(json['data'][i]['instagram']);
        const textig = document.createTextNode("Instgram: ");
        para.appendChild(textig);
        para.appendChild(IG_Name);
        const new_line = document.createElement("br");
        para.appendChild(new_line);
        const question = document.createTextNode(json['data'][i]['question']);
        const textquestion = document.createTextNode("Question: ");
        para.appendChild(textquestion);
        para.appendChild(question);
        para.classList.add('div1')
        document.body.appendChild(para);
        //const element = document.getElementById("div1");
        //element.appendChild(para);
        

    
    }
};



