Router.configure({
  layoutTemplate: 'layout'

});

Router.map(function() {
    this.route('main', {path: '/'});
    this.route('logInScreen');
    this.route('dashboard');
});

var mustBeSignedIn = function() {
    if (!(Meteor.user() || Meteor.loggingIn())) {
        Router.go('logInScreen');
    } else {
        this.next();
    }
};
var goHome = function() {
    if (Meteor.user()) {
        Router.go('dashboard');
    } else {
        this.next();
    }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['logInScreen']});
Router.onBeforeAction(goHome, {only: ['main', 'logInScreen']});
