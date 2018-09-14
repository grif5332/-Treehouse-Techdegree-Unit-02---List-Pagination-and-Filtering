/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Tested in the following browsers:
Chrome
***************************************** */
// = (FSJS) = Add variables that store DOM elements you will need to reference and/or manipulate
const recordsPerPage = 10;  // number of records to show on a given page
const studentRecords = document.getElementsByClassName('student-item cf');  //gets all the student records
let pageNumber = 1;  //sets the initial page
let numberOfPages = Math.ceil(studentRecords.length / 10);  // takes studentRecords and maths it to find how many pages based on # of records
const anchors = document.getElementsByTagName('a');  // //gets all the <a>

// = (FSJS) = Create a function to hide all of the items in the list except for the ten you want to show
// = (FSJS) = Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
// = (MATT) = DONE WITH THIS SECTION! ...I think...  YAY!
const showPage = (studentRecords, pageNumber) => {  // func that limits how many records are shown per page
    //loop through items in the list param.
    for (let i = 0; i < studentRecords.length; i++) {  //loops through all the studentRecords
        if (i >= (pageNumber * recordsPerPage) - recordsPerPage && i <= (pageNumber * recordsPerPage)-1) {
            studentRecords[i].style.display = 'block';  //sets the studentRecords within of the if() range to 'block' i.e shown. 
        } else {
            studentRecords[i].style.display = 'none';  // sets the studentRecord outside the if() range to 'none' i.e. not shown
        };
    };
};
// = (FSJS) = Create and append the pagination links - Creating a function that can do this is a good approach
// = (MATT) = W.I.P.  ...*sigh*...*whispers to myself "must. not. cry..."...*sniff*...
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
        li.innerHTML = `<a href="#" class="">${pageNumber}</a>`;  //inserts a HTML template lit into the li.  Also inserts the pageNumber
    };
    
    for (let i = 0; i < anchors.length; i++) { //loops through the anchors
        anchors[i].addEventListener('click', (event) => {  // adds a 'click' listener to the anchors
            // = MATT = How do I make all the other <a>'s class go away?   
            showPage(studentRecords, pageNumber);  // runs showPage()
            event.target.className = 'active'; //sets the event.target of the 'click' to 'active'. 
        });
    };
};
appendPageLinks();
// = (FSJS) = Add functionality to the pagination buttons so that they show and hide the correct items
// = (FSJS) = Tip: If you created a function above to show/hide list items, it could be helpful here