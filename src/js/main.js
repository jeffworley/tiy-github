(function() {
  // the code here is executed once in its own scope
  console.log("IIFE Works!!!");

  // Possible solution without assigning the return data to a variable but instead using an implied promise.
  /* $.ajax("../apis/github/users/octocat.json").then(function(data){
    console.log(arguments);
  }); */

  // To alter display of tab-navs links when clicked...
  $("#tab-navs a").on('click', function() {
    // Tracer Bullet to Ensure Correct Elements selected...
    //console.log("Tab Clicked!!!");

    // TODO: Remove class of "active" from all elements before tab is selelcted...
    // This initially doesn't matter but is essential for when you click to another tab...
    $("#tab-navs a").removeClass("active");

    // TODO: Add class of "active" to clicked element...
    $(this).addClass("active");

  });

  // To populate the mustashed key's in github octocat profile...
  $.getJSON("../apis/github/users/jeffworley.json", function() {
    
  });

})();
