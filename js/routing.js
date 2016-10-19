var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "pages/main.html"
  })
  .when("/game-page", {
    templateUrl : "pages/game-page.html"
  })
  .when("/game-librarry", {
    templateUrl : "pages/game-librarry.html"
  })
  .when("/wishlist", {
    templateUrl : "pages/wishlist.html"
  })
  .when("/log-in", {
    templateUrl : "pages/log-in.html"
  })
  .when("/sign-up", {
    templateUrl : "pages/sign-up.html"
  })
  .when("/news", {
    templateUrl : "pages/news.html"
  })
  .when("/friend-list", {
    templateUrl : "pages/friend-list.html"
  })
  .when("/profile", {
    templateUrl : "pages/profile.html"
  })
  .when("/shop", {
    templateUrl : "pages/shop.html"
  });
}); 
