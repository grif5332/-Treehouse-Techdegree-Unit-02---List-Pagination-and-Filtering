/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
Tested in the following browsers:
Chrome
***************************************** */
// = (FSJS) = Add variables that store DOM elements you will need to reference and/or manipulate
const recordsPerPage = 10;
const studentRecords = document.getElementsByClassName('student-item cf');
let pageNumber = 1;
let numberOfPages = Math.ceil(studentRecords.length / 10);
const anchors = document.getElementsByTagName('a');

// = (FSJS) = Create a function to hide all of the items in the list except for the ten you want to show
// = (FSJS) = Tip: Keep in mind that with a list of 54 studetns, the last page will only display four
// = (MATT) = DONE WITH THIS SECTION! ...I think...  YAY!
const showPage = (studentRecords, pageNumber) => {
    //loop through items in the list param.
    for (let i = 0; i < studentRecords.length; i++) {
        if (i >= (pageNumber * recordsPerPage) - recordsPerPage && i <= (pageNumber * recordsPerPage)-1) {
            studentRecords[i].style.display = 'block';
        } else {
            studentRecords[i].style.display = 'none';
        };
    };
};
// = (FSJS) = Create and append the pagination links - Creating a function that can do this is a good approach
// = (MATT) = W.I.P.  ...*sigh*....
const appendPageLinks = () => {
    let numberOfPages = Math.ceil(studentRecords.length / 10);
    const div = document.createElement('div');
    const ul = document.createElement('ul');
    div.className = 'pagination';
    div.appendChild(ul);
    
    document.querySelector('div.page').appendChild(div);

    for (let i = 0; i < numberOfPages; i++) {
        const pageNumber = i + 1;
        const li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = `<a href="#" class="">${pageNumber}</a>`;
    };
    
    for (let i = 0; i < anchors.length; i++) {
        anchors[i].addEventListener('click', (event) => {
            // = MATT = How do I make all the other <a>'s class go away?   
            showPage(studentRecords, pageNumber);
            event.target.className = 'active';
        });
    };
};
appendPageLinks();
// = (FSJS) = Add functionality to the pagination buttons so that they show and hide the correct items
// = (FSJS) = Tip: If you created a function above to show/hide list items, it could be helpful here