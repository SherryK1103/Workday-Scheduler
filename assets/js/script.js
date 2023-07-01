var buttons = document.getElementsByClassName("saveBtn")

let container = $('#container');
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

let dailyHours = [9, 10, 11, 12, 13, 14, 15, 16, 17]

$(function () {
  for (let i = 0; i < dailyHours.length; i++) {
    /*
    const element = buttons[i];
    element.addEventListener('click', function(event) {
      var hour = event.currentTarget.parentNode.id;
      var text = event.currentTarget.previousElementSibling.value;
      
    localStorage.setItem(hour, text);
    }
    )
    */

    let americanHrs = dailyHours[i]+'AM';

    if(dailyHours[i] >= 12){
      americanHrs = dailyHours[i]+'PM';
      if(dailyHours[i] > 12 ){
        americanHrs = dailyHours[i] - 12 + 'PM';
      }
    }

    let mainContainer = $("<div class='row time-block'>");// make "future" class dynamic to listen to conditions
    let hourCol = $("<div class='col-2 col-md-1 hour text-center py-3'>");
    let textCol = $("<textarea class='col-8 col-md-10 description' rows='3'>");
    let btnCol = $("<button class='btn saveBtn col-2 col-md-1' aria-label='save'>");
    let btnIcon = $("<i class='fas fa-save' aria-hidden='true'>");


    var newDate = dayjs().format('HH')
    console.log(newDate)
    if(parseInt(newDate) < dailyHours[i]) { 
      mainContainer.addClass('future'); // future class
    } else if((parseInt(newDate) == dailyHours[i])) { // present
      mainContainer.addClass('present');
    } else if((parseInt(newDate) > dailyHours[i])) { // past condition
      mainContainer.addClass('past');
    }

    btnCol.click(function(event){
      event.preventDefault();
      console.log(event.target)
      if(event.target.tagName==='i'){
// first target the textarea element, then target timeblock element
// get value from textarea element and timeblock element
// use localStorage.SetItem to store the data in local storage
      }
    })

    

  

    btnCol.append(btnIcon)
    hourCol.append(americanHrs)
    mainContainer.append(hourCol, textCol, btnCol);
    container.append(mainContainer);


  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
