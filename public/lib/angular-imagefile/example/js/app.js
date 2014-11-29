'use strict';


// Declare app level module which depends on filters, and services
angular.module('Example', [
  'ImageFile',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewimage', {templateUrl: 'partials/viewimage.html', controller: 'ViewImageController'});
  $routeProvider.when('/imageconverter', {templateUrl: 'partials/imageconverter.html', controller: 'ImageConverterController'});
  $routeProvider.otherwise({redirectTo: '/viewimage'});
}])
.controller('ViewImageController', [function(){

}])
.controller('ImageConverterController', [function(){
	
}]);
