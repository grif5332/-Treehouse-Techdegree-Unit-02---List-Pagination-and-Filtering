/******************************************
Treehouse Techdegree:  FSJS project 2 - List Filter and Pagination
Tested in the following browsers:  Chrome, Firefox, Opera,
***************************************** */
/* == Global Variables == */ 
const recordsPerPage = 10;  // number of records to show on a given page
const studentRecords = document.getElementsByClassName('student-item cf');  //gets all the student records
let pageNumber = 1;  //sets the initial page
let numberOfPages = Math.ceil(studentRecords.length / 10);  // takes studentRecords and maths it to find how many pages based on # of records
const anchors = document.getElementsByTagName('a');  // //gets all the <a>

/* == showPage() loops through the studentRecords.  Limits how many records are shown per page. == */
const showPage = (studentRecords, pageNumber) => { //takes in the studentRecords and pageNumber params.
    for (let i = 0; i < studentRecords.length; i++) {  //loops through all the studentRecords
        if (i >= (pageNumber * recordsPerPage) - recordsPerPage && i <= (pageNumber * recordsPerPage)-1) {
            studentRecords[i].style.display = 'block';  //sets the studentRecords within of the if() range to 'block' i.e shown. 
        } else {
            studentRecords[i].style.display = 'none';  // sets the studentRecord outside the if() range to 'none' i.e. not shown
        };
    };
};
showPage(studentRecords, pageNumber)  // initially runs the showPage() func.

/* == appendPageLinks() creates the elements for output to the page.  It also adds functionality to the created 'pagination' buttons. == */
const appendPageLinks = () => {
    let numberOfPages = Math.ceil(studentRecords.length / 10); //gets the number of pages
    const div = document.createElement('div'); //creates the <div>
    const ul = document.createElement('ul'); // creates the <ul>
    div.className = 'pagination'; // adds the class 'pagination'
    div.appendChild(ul); // appends the <ul> to the <div>
    
    document.querySelector('div.page').appendChild(div); //selects <div class="page"> and appends the new <div class="pagination"> 

    for (let i = 0; i < numberOfPages; i++) {  //loops through numberOfPages
        const pageNumber = i + 1;   // const holds the pageNumber + 1 (so output starts @ page 1, not 0)
        const li = document.createElement('li'); //creates an <li>
        ul.appendChild(li);  // Appends the <li> to the <ul>
        li.innerHTML = `<a href="#" class="">${pageNumber}</a>`;  //inserts a HTML template lit. into the <li>.  Also inserts the pageNumber
    };
    
    for (let i = 0; i < anchors.length; i++) { //loops through the anchors created by the for loop at line 34.
        anchors[i].addEventListener('click', (event) => {  // adds a 'click' listener to the anchors
            for(let i = 0; i < anchors.length; i++) { // this loops through the <a> list  
                anchors[i].className = ""; //  sets <a> class to class="". thus, removing "active" and making the buttons not active.
            };
            showPage(studentRecords, i + 1);  // runs showPage() func.
            event.target.className = 'active'; //sets the event.target of the 'click' to 'active'. 
        });
    };
};
appendPageLinks(); //runs the appendPageLinks function.