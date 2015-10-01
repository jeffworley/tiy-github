(function() {
  // the code here is executed once in its own scope
  console.log("IIFE Works!!!");

  // use jQuery.ajax to fetch data from octocat.json and log the result to console.
  /* var octocatResult = $.ajax({ url: "https://api.github.com/users/octocat" });
  console.log(octocatResult); */

  // try the above but fetch from the local copy of octocat.json.
  var octocatResult = $.ajax({ url: "../apis/github/users/octocat.json"});
  console.log(octocatResult);

  // Possible solution without assigning the return data to a variable but instead using an implied promise.
  /* $.ajax("../apis/github/users/octocat.json").then(function(data){
    console.log(arguments);
  }); */

})();
