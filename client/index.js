// Routing configuration

Router.configure({
  layoutTemplate: 'Layout'
});

Router.route('/', function () {
  this.render('Home');
});

Router.route('/list', function () {
  this.render('List');
});

// Init Framework7

Template.Layout.onRendered(function() {
  
  f7 = new Framework7({
    router: false,
    swipeBackPage: true,
    animatePages: true
  });

  mainView = f7.addView('.view-main', {
    onSwipeBackBeforeChange: function(callbackData) {
      history.back();
    }
  });

  this.find('.pages')._uihooks = {
    insertElement: function(node, next) {
      mainView.router.loadContent(node);
    },
    removeElement: function(node) {
      return false;
    }
  };
});