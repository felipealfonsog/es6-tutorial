// codesmith closure challenge hardparts


var firstName = "Felipe";
var lastName = "Gonzalez";
var fullName = firstName + ' ' + lastName;

var github = "felipealfonsog";

var email = "felipe.dev.engr.js@fleep.io";

var linkedIn = "linkedin.com/in/felipealfonsog/";

var phone = "+56982471585";
var city  = "Santiago, Chile";
var campus = "NY";

var contactInfo = [fullName, github, email, linkedIn, phone, city, campus];

var education = ['Universidad Mayor', 'Computer Science Engiineering', 2008 // Attended an special plan of 3 years, attented 2 first years.
];

// creating function app
function createApp (contactInfo, education) {
  const app = {};
  
  app.contactInfo = contactInfo;
  app.education = education;
  
  return app;
}


// creating function timesby

function timesBy(N){
  var output = []
  var ans = 0
  function arrayInput(input){
    console.log(input.length)
    for(i = 0; i < input.length; i++)
    {
      console.log(i)
      console.log("for")
      ans = input[i] * N
      output.push(ans)
    }
  return output
  }
  return arrayInput
}

var timesBy2 = timesBy(2); 
var timesBy3 = timesBy(3); 
console.log(timesBy2([1, 3, 5, 7, 9]))
console.log(timesBy3([1, 3, 5, 7, 9]))
