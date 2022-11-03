/* ------------------------------ FUNCTION-DEFINITION-AREA --------------------------- */

// Function, Takes Local-Storage Name And Returns [Parsed-Object]
const get_DataFromLS = localStorage_Name => JSON.parse(localStorage.getItem(localStorage_Name)); // Parsing String And Returning OBject!!

// function, takes 2 Arguments, 1st-[LS_Name] 2nd-[Notes_ArrayObject], and The function Puts The Object in the [LocalStorage] in the form Of (String);
function PUT_DataToLS(localStorage_Name, notes_OBJ) {
    localStorage.setItem(localStorage_Name, JSON.stringify(notes_OBJ));
}
// Function, takes only 1 Argument- Local-Storage Name, & check If That NameHaving LocalStorage Exist Or Not..?? If exists (Returns False) or (Returns-True)
const is_Empty = localStorage_Name => {
    if (localStorage.getItem(localStorage_Name) === null)
        return true;
    return false;
}
// Put LocalStorage_Name As An Argument And Get the Parsed-(Array)Object If The L.S. Name doesn't Exist Returns The Empty Object 
function get_OnlyObj_from_LS(localStorage_Name) {
    if (is_Empty(localStorage_Name))
        return ([]);     // returning an empty object :) another way, return (obj = []);
    else
        return (get_DataFromLS(localStorage_Name));
}

// Display The Notes into The DoM
function DisplayNotesFrom_LS() {
    let notes_Obj = get_OnlyObj_from_LS('notes');  // Extracting The ['notes' Named Local-Storage In The Form Of (Parsed-Object)]

    let str = "";  // Declaring And Initializing Empty String-Variable

    for (let i = 0; i < notes_Obj.length / 2; i++) {  // Operatin' The loop Till Half-Of-the-[Array(Object)]'s Length, As The Size is Doubled Due to [NotesTitle & NotesPara] 

        // Even-Numbered Index Having [Title Of the Note], Odd-Numbered Index Having [Paragraph Of The Note];
        str += ` <div class="dynamicDiv card mx-2 my-2" style="width: 18rem; ">
        <div class="card-body">
          <h5 class="card-title">${notes_Obj[2 * i]}</h5>
          <p class="dynamicContent card-text">${notes_Obj[(2 * i) + 1]}</p>
          <button id=${2 * i} onclick = "deleteNote_Functionality(this.id)" class="btn btn-primary">Delete Moment</button> 
        </div>
    </div> `;
    }
    notesCont.innerHTML = str;
}

// Get Index As an Arguments  
function deleteNote_Functionality(i) {
    notes_Obj = get_OnlyObj_from_LS("notes"); // Getting Parsed-Object(Array) From (LocalStorage) Through The FUnction 
    notes_Obj.splice(i, 2);  // Removes 2 Elements From (i-th) to (i-th + 1) Index
    PUT_DataToLS("notes", notes_Obj);  // Using this func. To Update The (Local-Storage) With The "MODIFIED-(ARRAY)OBJ"
    DisplayNotesFrom_LS(); // And Displayin' 
}


function filterThroughInputTag() {
    // let notes_Obj = get_OnlyObj_from_LS("notes");
    let inputStr = searchBar.value;

    // Converting The HTML-Collection Into An (Array) So, We can Travese With (For/Loops)
    let Html_Elm = Array.from(document.getElementsByClassName('dynamicContent'))

    // On input-Event, We'll Use [CSS Properties] (DisplayBlock, DisplayNone) Properties
    for (let index = 0; index < Html_Elm.length; index++) {
        const element = Html_Elm[index];
        if (Html_Elm[index].innerHTML.includes(inputStr))
            document.getElementsByClassName("dynamicDiv")[index].style.display = "block";
        else
            document.getElementsByClassName('dynamicDiv')[index].style.display = "none";
    }



}


/* //////////////////////////// FUNCTION-DEFINITION-AREA //////////////////////////// */

/* --------- GLobal-Area like C/C++'s Main Function ---------- */




let notesTitle = document.getElementById('notesTitle');
let txtArea = document.getElementById("txtArea");
let searchBar = document.getElementById("searchBar");
let addNotes_Btn = document.getElementById("addBtn");
let notesCont = document.getElementById("notesContainer");

DisplayNotesFrom_LS();
addNotes_Btn.addEventListener("click", () => {
    let notes_Obj = get_OnlyObj_from_LS("notes");
    notes_Obj.push(notesTitle.value, txtArea.value); // Even-Index For Title Odd-indx for content
    PUT_DataToLS('notes', notes_Obj);
    DisplayNotesFrom_LS();
});

searchBar.addEventListener("input", function () {
    filterThroughInputTag();
});

/*  /////// GLobal-Area like C/C++'s Main-Function //////// */
