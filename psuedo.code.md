Homework Week 5
Work Schedule


1. Setup Variables
    * jQuery select DOM elements

2. Display Current Date in header
    * get cuttent date
    * format current date
    * update DOM with current date

3. Render timeblocks
    * read from localstorage
    * create input field
    * create 'save' button
    * add CSS classes for style
        - determine if timeblock is 'past', 'present', or 'future'
    * add 'value' from localstorage into input
    * append to DOM
    * add to local variable

4. Event Handler for 'SAVE'
    * When a user enters text into a field
    * Then user clicks **matching** 'save' button
        - save the related input field into localstorage
        - if field is empty, remove from localstorage
    * display notification when the save is complete
    

    ```js
        var schedule = {
            
        }


        localStorage.setItem('schedule', JSON.stringify(shcedule))
    ```