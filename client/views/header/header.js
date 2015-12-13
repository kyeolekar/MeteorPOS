Template.header.onRendered(function () {
  Mousetrap.bind(['down'], function(e) {
      Router.go("bills");
  });
  Mousetrap.bind(['up'], function(e) {
      Router.go("items");
  });

});