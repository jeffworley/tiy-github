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
  // Equivalent to $.ajax('../apis/github/users/jeffworley.json');

  //The traditional jQuery way...
  $.getJSON("../apis/github/users/jeffworley.json")


  //The fetch way which is newer...
  //window.fetch('../apis/github/users/jeffworley.json')
    .then(function(data) {

      // Example from lodash documentation so I don't keep going between windows...
        // using custom template delimiters
        // _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
        // var compiled = _.template('hello {{ user }}!');
        // compiled({ 'user': 'mustache' });
        // → 'hello mustache!'

      // All of this is accomplished by utilizing the template tags inside of your html in collaboration with the below code...

      _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
      var profileTpl = _.template($('.leftsidelist template').html());

      // To test for actual replacement.
      // console.log(profileTpl({
      //   company: 'The Internet',
      //   email: 'octocat@github.com',
      //   blog: 'https://blog.example.com',
      //   created_at: 'Today!'
      // }));

      // To solve it simply but not the best way...
      // $('.leftsidelist').append(profileTpl({
      //   company: 'The Internet',
      //   email: 'octocat@github.com',
      //   blog: 'https://blog.example.com',
      //   created_at: 'Today!'
      // }));

      // To solve it with the data returned from the promise above...
      $('.leftsidelist').append(profileTpl(data));

    });

})();
