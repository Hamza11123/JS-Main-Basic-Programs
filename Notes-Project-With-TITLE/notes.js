/* ------------------------------ FUNCTION-DEFINITION-AREA --------------------------- */

function get_DataFromLS(localStorage_Name) {
    return(JSON.parse(localStorage.getItem(localStorage_Name)));
}
function PUT_DataToLS(localStorage_Name, notes_OBJ) {
    localStorage.setItem(localStorage_Name, JSON.stringify(notes_OBJ));
}
function is_Empty(localStorage_Name) {
    if(localStorage.getItem(localStorage_Name) === null)
        return true;
    return false; 
}
function get_OnlyObj_from_LS(localStorage_Name) {
    if(is_Empty(localStorage_Name))
        return([]);     // returning an empty object :) another way, return (obj = []);
    else
        return(get_DataFromLS(localStorage_Name));
}
function DisplayNotesFrom_LS() {
    let notes_Obj = get_OnlyObj_from_LS('notes');
    str = "";
    for (let index = 0; index < notes_Obj.length/2; index++) {
        str += `  <div class="dynamicDiv card mx-2 my-2" style="width: 18rem; ">
        <div class="card-body">
          <h5 class="card-title">${notes_Obj[2*index]}</h5>
          <p class="dynamicContent card-text">${notes_Obj[(2*index)+1]}</p>
          <button id=${2*index} onclick = "deleteNote_Functionality(this.id)" class="btn btn-primary">Delete Moment</button>
        </div>
    </div> `;
    }
    notesCont.innerHTML = str;
}
function deleteNote_Functionality(index) {
    notes_Obj = get_OnlyObj_from_LS("notes");
    notes_Obj.splice(index, 2);
    PUT_DataToLS("notes", notes_Obj);
    DisplayNotesFrom_LS();
}

function filterThroughInputTag() {
    // let notes_Obj = get_OnlyObj_from_LS("notes");
    let inputStr = searchBar.value;

    let Html_Elm = Array.from(document.getElementsByClassName('dynamicContent'))

    for (let index = 0; index < Html_Elm.length; index++) {
        const element = Html_Elm[index];
        if(Html_Elm[index].innerHTML.includes(inputStr))
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
    addNotes_Btn.addEventListener("click", () =>{
        let notes_Obj = get_OnlyObj_from_LS("notes");
        notes_Obj.push(notesTitle.value, txtArea.value); // Even-Index For Title Odd-indx for content
        PUT_DataToLS('notes', notes_Obj);
        DisplayNotesFrom_LS();
    });

    searchBar.addEventListener("input", function () {
        filterThroughInputTag();
    })

    


/*  /////// GLobal-Area like C/C++'s Main Function //////// */
