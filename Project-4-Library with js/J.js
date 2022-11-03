// v-1 not-workin'
// console.log("Hey Lbrary ");

// /////////////////////////////// Function Definiton //////////////////////////////
// // Constructor  
// function Book(givenName, givenAuthor, givenType) {
//     this.name = givenName;
//     this.author = givenAuthor;
//     this.type = givenType;
// }

// function Display() {

// }
// // [clear] Method Of [Display] Object is Being Defining...
// Display.prototype.clear = function(){
//     // Clear The G.U.I
//     let libraryForm = document.getElementById("libraryForm");
//     libraryForm.reset();
//     console.log("Clear The Gui");
// }

// // [add] Method Of [Display] Object is Being Defining...
// Display.prototype.add = function(book){
//     // Add To G.U.I
//     console.log('Add To Gui ');

//     let tableBody = document.getElementById("TB");

//     let UI_String = `<tr>
//                         <td>${book.name}</td>
//                         <td>${book.author}</td>
//                         <td>${book.type}</td>
//                     </tr>`;

//     tableBody.innerHTML += UI_String;

// }

// // Add method to display Proto-Type


// // add addEventListener To libraryForm
// let libraryForm = document.getElementById("libraryForm");


// // OnSubmit LibraryForm Event-Listener Action..
// libraryForm.addEventListener("submit", (E)=>{ 
//     console.log("Submit");

// /*-------------- Accessing All Form [Input-Elemnents] ---------------*/

//     let Name = document.getElementById("bookName").value;
//     let Author = document.getElementById("bookAuthor").value;
//     let motivational_Radio = document.getElementById("radioMotivational");
//     let technology_Radio = document.getElementById("radioTech");
//     let fitness_Radio = document.getElementById("radioFitness");
//     let Type;   // Will Access that ElEMENT Radio-Button Which One Is Selected :}

// /*-------------- Accessing All Form [Input-Elemnents] ---------------*/




// /* ------------ Radio-Checked logic Algorithm -------------*/

//     if(motivational_Radio.checked)
//     Type = motivational_Radio;
//     else if(technology_Radio.checked)
//     Type = technology_Radio;
//     else if(fitness_Radio.checked)
//     Type = fitness_Radio;

// /* ------------ Radio-Checked logic Algorithm -------------*/


//     let book = new Book(Name, Author, Type);
//     console.log(book);

//     let display = new  Display();
//     display.add();
//     display.clear();  
     

//     E.preventDefault();      
// });

// // function libraryForm_Submit(E) {
// //     E.preventDefault();
// //     console.log("you have Submit"); 
    
// // }

// /*---------------------------- Function Definiton -----------------------------*/

//version-2 improved-working

// class Book {
//     constructor(givenBook_Name, givenBook_Author, givenBook_Type){
//         this.bookName = givenBook_Name;
//         this.bookAuthor = givenBook_Author;
//         this.bookType = givenBook_Type;
//     }

//     addTo_DOM(bookObj){
        
               
//         document.getElementsByTagName("tbody")[0].innerHTML += `<tr>
//                                                                     <td>${bookObj.bookName}</td>
//                                                                     <td>${bookObj.bookAuthor}</td>
//                                                                     <td>${bookObj.bookType}</td>
//                                                                 </tr> `;
//     }
//     clear(){
//         document.getElementById("libraryForm").reset(); // Method Used To Reset All the Filled input-tags Just like .value = "";
//     }
// }

// let addBook = document.getElementById("addBtn");

// addBook.addEventListener('click', (Event_Obj)=>{  // Another Way, Get Form "id" and Add "Submit" EventListener On The Form ELEMENT;
//     let bookName = document.getElementById("bookName").value;  // getting Stirng in BookName->[Input-Tag]
//     let bookAuthor = document.getElementById("bookAuthor").value;  // getting Stirng in BookAuthor->[Input-Tag]

//     // Storing the Radio-Input-Elems in JS' Variables
//     let motivational_Radio = document.getElementById("radioMotivational");
//     let tech_Radio = document.getElementById("radioTech");
//     let fitness_Radio = document.getElementById("radioFitness");

//     // condition ? exprIfTrue : exprIfFalse (Using Ternary Operator) :]
//     let bookType = (motivational_Radio.checked) ? "Motivational"  : (tech_Radio.checked) ? "Technology" : (fitness_Radio.checked) ? "Fitness" : console.log("not selected..");
//     // console.log(bookType);

//     let bookObj = new Book(bookName, bookAuthor, bookType ); //Creatin' bookObj with the Class Book
//     // console.log(bookObj);

//     bookObj.clear(); // Resetin'/Clearing The Filled-Form
//     bookObj.addTo_DOM(bookObj);
//     Event_Obj.preventDefault(); // Prevent The Deffault Behaviour Of the [Reloading-Page] On-Submiting The Form :)
// });



// v-3
/*--------------- lS-With-Arrays-Class --------------------*/
class Local_Storage{
    constructor(givenLS_name, givenLS_value){ // Constructor To create an LS; after Passin' name and Val;
        this.LS_name = givenLS_name;
        this.LS_value = givenLS_value;
        localStorage.setItem(LS_name, JSON.stringify(LS_value));
    }
    get_LS(){
        if(null == localStorage.getItem(this.LS_name))
            return ([]);
        return(JSON.parse(localStorage.getItem(this.LS_name)));
    }
    LS_UpDate(LS_Obj){
        localStorage.setItem(this.LS_name,JSON.stringify(LS_Obj));
    }
    clear_LS(){
        localStorage.clear(this.LS_name);
    }
}
/*--------------- lS-With-Arrays-Class --------------------*/

class Book {
    constructor(givenBook_Name, givenBook_Author, givenBook_Type){
        this.bookName = givenBook_Name;
        this.bookAuthor = givenBook_Author;
        this.bookType = givenBook_Type;
    }

    addTo_DOM(bookObj){
        
               
        document.getElementsByTagName("tbody")[0].innerHTML += `<tr>
                                                                    <td>${bookObj.bookName}</td>
                                                                    <td>${bookObj.bookAuthor}</td>
                                                                    <td>${bookObj.bookType}</td>
                                                                </tr> `;
    }
    clear(){
        document.getElementById("libraryForm").reset(); // Method Used To Reset All the Filled input-tags Just like .value = "";
    }
}

let addBook = document.getElementById("addBtn");

addBook.addEventListener('click', (Event_Obj)=>{  // Another Way, Get Form "id" and Add "Submit" EventListener On The Form ELEMENT;
    let bookName = document.getElementById("bookName").value;  // getting Stirng in BookName->[Input-Tag]
    let bookAuthor = document.getElementById("bookAuthor").value;  // getting Stirng in BookAuthor->[Input-Tag]

    // Storing the Radio-Input-Elems in JS' Variables
    let motivational_Radio = document.getElementById("radioMotivational");
    let tech_Radio = document.getElementById("radioTech");
    let fitness_Radio = document.getElementById("radioFitness");

    // condition ? exprIfTrue : exprIfFalse (Using Ternary Operator) :]
    let bookType = (motivational_Radio.checked) ? "Motivational"  : (tech_Radio.checked) ? "Technology" : (fitness_Radio.checked) ? "Fitness" : console.log("not selected..");
    // console.log(bookType);

    let bookObj = new Book(bookName, bookAuthor, bookType ); //Creatin' bookObj with the Class Book
    // console.log(bookObj);

    bookObj.clear(); // Resetin'/Clearing The Filled-Form
    bookObj.addTo_DOM(bookObj);
    Event_Obj.preventDefault(); // Prevent The Deffault Behaviour Of the [Reloading-Page] On-Submiting The Form :)
});






