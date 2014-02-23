


function initializeMap() {
  var centreLatLng = new google.maps.LatLng(-25.274398,133.775136);
  var defaultMapViewOptions = {
    zoom: 3,
    centre: centreLatLng
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), defaultMapViewOptions);
  var marker = null;
  function updateMarker() {
    if (marker) {
      marker.setMap(null);
    }
    marker = new google.maps.Marker({
	position: centreLatLng,
	map: map,
	draggable:true,
	title:"Find tide times at this location"
    });
    
  }
  updateMarker();
  //HTML5 geolocation - zoom to user's location
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      centreLatLng = new google.maps.LatLng(position.coords.latitude,  position.coords.longitude);
      map.setZoom(5)
      map.setCenter(centreLatLng);
      updateMarker();
    }, function(){});
  }
  console.log(marker.getPosition().lat())
}

//google.maps.event.addDomListener(window, 'load', initializeMap);
  

function tidesController($scope) {
  $scope.map = {
    center: {
        latitude: 45,
        longitude: -73
    },
    zoom: 8
  };

  //$scope.latlon = '';
  
}
angular.module('app', ['components', 'google-maps']);
