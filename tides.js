
angular.module('app', ['components'])
 
.controller('about', function($scope, $locale) {
  $scope.beers = [0, 1, 2, 3, 4, 5, 6];
  if ($locale.id == 'en-us') {
    $scope.beerForms = {
      0: 'no beers',
      one: '{} beer',
      other: '{} beers'
    };
  } else {
    $scope.beerForms = {
      0: 'žiadne pivo',
      one: '{} pivo',
      few: '{} pivá',
      other: '{} pív'
    };
  }
});
function aboutController($scope) {
	$scope.message = "Thanks for using my site, I hope you found it useful. ";
}
function TodoCtrl($scope) {
  /* var mapElement = document.getElementById("map_canvas");
  var myOptions = {
    center: new google.maps.LatLng(-43.53567218583064,172.60057833726108),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
 
  map = new google.maps.Map(mapElement, myOptions);
  var myLatlng = new google.maps.LatLng(-43.53567218583064,172.60057833726108);
  var marker = new google.maps.Marker({
	position: myLatlng,
	map: map,
	title:''
  });*/
  
  
       /* function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(-34.397, 150.644),
          zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);
      }*/
      //google.maps.event.addDomListener(window, 'load', initialize);
  
  $scope.todos = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}];
 
  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false});
    $scope.todoText = '';
  };
 
  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      count += todo.done ? 0 : 1;
    });
    return count;
  };
 
  $scope.archive = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}

