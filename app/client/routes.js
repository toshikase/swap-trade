/**
Template Controllers

@module Routes
*/

/**
The app routes

@class App routes
@constructor
*/


// Iron.Location.configure({useHashPaths: true});

// Router defaults
Router.configure({
    layoutTemplate: 'layout_main',
    notFoundTemplate: 'layout_notFound',
    yieldRegions: {
        'layout_header': {to: 'header'}
        , 'layout_footer': {to: 'footer'}
    }
});

// ROUTES

/**
The receive route, showing the wallet overview

@method dashboard
*/

// Default route
Router.route('/', {
    template: 'views_view1',
    name: 'home'
});

// Route for view1
Router.route('/view1', {
    template: 'views_view1',
    name: 'view1'
});

// Route for view2
Router.route('/view2', {
    template: 'views_view2',
    name: 'view2'
});

// Route for view3
Router.route('/view3', {
    template: 'views_view3',
    name: 'view3'
});


Router.map(function() {
  this.route('view4', {
    path: 'contract/:_id',
    data: function() { return Contracts.findOne({_id: this.params._id});}
  });
});

Router.map(function() {
  this.route('view5', {
    path: 'respond/:_id',
    data: function() { return Contracts.findOne({_id: this.params._id});}
  });
});
// Route for contract_show
//Router.route('/contract/:_id', function () {
//    this.render('views_view4', {
//      data: function() { return Contracts.findOne({_id: this.params._id});}
//    }
//});
