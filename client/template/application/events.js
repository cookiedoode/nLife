  Template.Layout.events({
    'click a.logout': function() {
      Meteor.logout(function() {
        // Redirect to login
        Router.go('/logInScreen');
      });
      return;
    }
  });

Template.dashboard.events({
  'click [data-logout]': function (e, tmpl) {
    Meteor.logout();
  }

});

