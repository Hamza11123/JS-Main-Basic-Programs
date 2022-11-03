console.log("i'm active");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener(buttonClickHandler);

function buttonClickHandler() {
    console.log("clicked on fruite");
    // instantiate an XHR Object
    const XHR = new XMLHttpRequest();

    // Openning XHR Obj
    XHR.open('GET', "demo.txt", true); // open( [PerformingRequest] or fetching,  [Filename.txt], [false/true] );  true-> Asynchronus-Programmin', false-> Synchronus-Programming


    // What to do on Progress
    XHR.onprogress = function () {
        console.log("on Progress");
    }

    // what to do when Response
    XHR.onload = function () {
        console.log(this.responseText);
    }
    XHR.send();
}