function myMap() {
    var grandyst = {lat: 52.63, lng: -1.13};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 5,
     center: grandyst
    });
    var marker = new google.maps.Marker({
        position: grandyst,
        map: map
      });    
    }


