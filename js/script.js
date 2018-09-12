/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// = (FSJS) = Add variables that store DOM elements you will need to reference and/or manipulate
const studentList = document.getElementsByClassName('student-list');
const studentItem = document.getElementsByClassName('student-item');
const textInput = document.getElementById('textInput');

// = (FSJS) = Create a function to hide all of the items in the list except for the ten you want to show
// = (FSJS) = Tip: Keep in mind that with a list of 54 studetns, the last page will only display four


// = (FSJS) = Create and append the pagination links - Creating a function that can do this is a good approach




// = (FSJS) = Add functionality to the pagination buttons so that they show and hide the correct items
// = (FSJS) = Tip: If you created a function above to show/hide list items, it could be helpful here






/* Matt's project notes and thoughts
Do I need to use jQuery?  i dont know...

I need to break the list into bunches of 10.  when I sort the list, it will take
the result then break it up into bunches of ten (if needed).  the math that breaks the list up will
give a number.  That number will be appended a list of numbersto the bottom of the page equal to the 
number of results of the filter divided by 10.  I also need to hide items tht does not meet the search
params.  
*/