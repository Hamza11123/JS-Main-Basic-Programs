/*-------------------------- Area Of Function$ Definition -------------------------*/
console.log("console ")

// Function, Give it The Local-Storage Name And Get The [Parsed-Object], Remember: this func. isn't used directly, another function will use it! to parse Obj from L.S.
const get_ObjectFromLS = localStorage_Name => JSON.parse(localStorage.getItem(localStorage_Name)); // Parsing String And Returning OBject!!

// function, takes 2 Arguments, 1st-[LS_Name] 2nd-[Notes_ArrayObject], and The function Puts The Object in the [LocalStorage] in the form Of (String);
function updateLS_withObj(localStorage_Name, notes_OBJ) {
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
        return (get_ObjectFromLS(localStorage_Name));
}

function displayTasks() {
    let tasksObj = get_OnlyObj_from_LS('tasksArray');
    let str = "";
    // <td>${tasksObj[(2 * i) + 1]}</td>
    for (let i = 0; i < (tasksObj.length) / 2; i++) {
        const element = tasksObj[i];
        str += `
            <tr class = "my-8">
            
            <th scope="row">${i + 1}</th>  
                    <th>${tasksObj[(2 * i)]}</th>   
                    ${summaryAndDetailsHandler(tasksObj[(2 * i) + 1])}
                    <td><button type="button" id="${i}" onclick="DoneTask(this.id)" class="btn btn-outline-primary">Done!</button></td>
            </tr >`;
    }
    tbodyTasksContainer.innerHTML = str;
}

/*----------------- In-Pending --------------------*/
function summaryAndDetailsHandler(wholeDescription_Str) {
    let mathObj = Math; // declaring the math Object for Its (Useful-Methods);

    let wholeDescriptionLENGTH = wholeDescription_Str.length;
    let summary = '', details = '';

    if (wholeDescription_Str.length >= 44) {

        for (let i = 0; i < wholeDescriptionLENGTH; i++) {  // Only 30% of the String chars Are Present in the Summary, remaining 70% would b present in the details TAG :) if the Chars > 43
            const char = wholeDescription_Str[i];

            if (i <= mathObj.floor((wholeDescriptionLENGTH / 3)))
                summary += char;
            else
                details += char;
        }
        let DescriptionElem_ModifiedStr = `<td><details>${details}<summary>${summary}</summary></details></td>`;
        return (DescriptionElem_ModifiedStr);
    }
    return (`<td>${wholeDescription_Str}</td>`);
}
/*----------------- In-Pending --------------------*/


function DoneTask(i) {
    console.log("You clicked on ", i);
    let tasksObj = get_OnlyObj_from_LS("tasksArray");

    tasksObj.splice(i, 2);
    updateLS_withObj('tasksArray', tasksObj);
    displayTasks();
}

/*-------------------------- Area Of Function$ Definition -------------------------*/

// O = ['teuhtheuthoe', 'huthoteuhtoheuthoeu', 'eutoeuoeuhoteuhtuh'];

// UpdateLS_withObj('Tasks', O);
// console.log(get_OnlyObj_from_LS('Tasks'))

let addTaskBtn = document.getElementById("addTask");
let doneTaskBtn = document.getElementById("doneTask");
let textArea_taskDescription = document.getElementById("taskDescription");
let inputArea_taskName = document.getElementById("taskName");
let tbodyTasksContainer = document.getElementById("tbodyTasksContainer");
displayTasks();



addTaskBtn.addEventListener("click", (E) => {

    console.log("clicked on add task")
    let tasksObj = get_OnlyObj_from_LS("tasksArray");

    tasksObj.push(inputArea_taskName.value, textArea_taskDescription.value);
    if (inputArea_taskName.value == "" || textArea_taskDescription.value == "")
        addTaskBtn.style.backgroundColor = "red";
    else {
        addTaskBtn.style.backgroundColor = "#0D6EFD";
        updateLS_withObj('tasksArray', tasksObj)
        console.log(tasksObj);
        inputArea_taskName.value = '';
        textArea_taskDescription.value = '';
    }
    displayTasks();


})



