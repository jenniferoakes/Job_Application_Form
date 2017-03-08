(function() {
  window.jobApplications = window.jobApplications || {};

    console.log("Hi UIevents file!");

    document.querySelector('#full-name').addEventListener('blur', function addNewItem(e) {
      console.log(e.target.value.length);

        if (e.target.value.length <= 1) {
          e.target.parentNode.parentNode.classList.add('has-error'); // ()found the full-name element, and selected the aside, and put in parenthesis by calling its class
          console.log('Error: Please input your full name');
        } else {
          e.target.parentNode.parentNode.classList.remove('has-error');
        }
    });

    document.querySelector('#exp').addEventListener('mouseup', function updateTextWithCorrectValue(e) {
      console.log(e.target.value);

      document.querySelector('#exp-figure').innerText = e.target.value + ' years';
    });

    function countChecks(checkBoxArray) { //gives back how many are checked //takes in checks and counts true values
      let checkBoxCount = 0;

      checkBoxArray.forEach(function checkCount(each) {
        if (each.childNodes[1].checked) {
          checkBoxCount++;
        }
      });

      return checkBoxCount;
    }

    console.log(document.querySelectorAll('.checkbox-inline')); //showed me the array...querySelectorAll returns an Array
    let checkBoxArray = document.querySelectorAll('.checkbox-inline');

    checkBoxArray.forEach(function addListener(eachElement) {
      eachElement.addEventListener('click', function updateNumberValue(e) {
        console.log(e);
        document.querySelector('#checkbox-inline-figure').innerText = countChecks(checkBoxArray) + ' languages';
      });
    });

    // Do not allow the form to be submitted, you will need to prevent the submit event from occurring.
    // Instead, when the form attempts to be submitted, call a function in your other module
    // (you can name it whatever you want)
    // This other function (for now) should change the style of the "results" alert box to
    // have display equal block and add a success message inside the tag
    // (like: "Your application has been received!")
    // Note that this means the data is never sent anywhere! Take a look at Adventure Mode.

    document.querySelector('form').addEventListener('submit', function submitJobApp(e) {
      e.preventDefault();

      console.log('Apply Now', e);

      let fullNameData = document.querySelector('#full-name').value;
      let expData = document.querySelector('#exp').value;
      // document.querySelector('#languages-js').value;
      // document.querySelector('#languages-html').value;
      // document.querySelector('#languages-css').value;
      let workUrlData = document.querySelector('#work-url').value;

      window.jobApplications.submittingTheJobApp({
        fullNameData: fullNameData,
        expData: expData,
        workUrlData: workUrlData,
      });


    });




}());

//prevent default on form...call function in other module and do a fetch request...do fetch and update results
//ex. error class from last night's homework
//
//event: fetch with post (how to pass in body language), this is secondary
