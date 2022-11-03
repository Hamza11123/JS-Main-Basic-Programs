console.log("tut 35");  


let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler(){
    console.log("You have clicked the fetchBtn");
     
    // instantiate an XHR Object
    const XHR = new XMLHttpRequest();

    // Open the object
    XHR.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true); // .open( [PerformingRequest] or fetching, [FileName.txt], [false/True]); true-> Asynchronus, false->Synchronus Programming
    // XHR.getResponseHeader('Content-type', 'application/x-www-form-urlencoded')
    XHR.getResponseHeader('Content-type', 'application/json');

    // // What to do on Progress
    // XHR.onprogress()  = function(){
    //     console.log("on Progress :)");
    // }

    // // Old Function Similar to 'onLoad = function()' 
    // XHR.onreadystatechange = function(){
    //     console.log("ready is state is ", XHR.readyState);
    //     if(this.status === 200)
    //         console.log(this.responseText  );
    //     else
    //      console.log(`some Error Occured :( The Status Code is ${this.status}`);         
    // }

    // what to do when Response
    XHR.onload = function(){
        console.log(this.status); // Response code '200' means [OK], '404' means [File-not-Found] :] & on so on...
        if(this.status === 200)
            console.log(this.responseText);
        else
            console.log(`some Error Occured :( The Status Code is ${this.status}`);   
    }

    // We gotta send original JSon
    params =  {"name":"teuueuust","salary":"123","age":"23"};

    // // Converted to the URL String 
    // params =  "name=test&salary=123&age=23";

    // Sending Request..<3
    XHR.send(params);
    console.log("We're Done!");

    

}
