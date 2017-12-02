function myMap() {

    var leicatherdral = {
        info: '<strong>Leiecester Cathedral</strong><br>\
					7 Martins House<br> Leicester, LE1 5PZ<br>\
					<a href="https://goo.gl/WsYxRu">Get Directions</a>',
        lat: 52.634073,
        long: -1.137811
    };

    var richthird = {
        info: '<strong>Richard the Third</strong><br>\
					7 Martins House<br> Leicester, LE1 5PZ<br>\
					<a href="https://goo.gl/WsYxRu">Get Directions</a>',
        lat: 53.9627,
        long: -1.0788
    };

    var hayclocktower = {
        info: '<strong>Haymarket Clock Tower</strong><br>\r\
					3 East Gates<br> Leicester LE1 5YA<br>\
					<a href="https://goo.gl/mgW2Hk">Get Directions</a>',
        lat: 52.635867,
        long: -1.133357
    };

    var newMuseum = {
        info: '<strong>New Walk Museum and Art Gallery</strong><br>\
					53 New Walk<br> Leicester, LE1 7EA<br>\
					<a href="https://goo.gl/zBBWoa">Get Directions</a>',
        lat: 52.629072,
        long: -1.125472
    };

    var powerstaduium = {
        info: '<strong>King Power Stadium</strong><br>\
					Filbert Way<br> Leicester, LE2 7FL<br>\
					<a href="https://goo.gl/zBBWoa">Get Directions</a>',
        lat: 52.6183,
        long: -1.1413
    };

    var arch = {
        info: '<strong>The Arch of Rememberance</strong><br>\
					Victoria Park<br> Leicester, LE1 5YA<br>\
					<a href="https://goo.gl/mgW2Hk">Get Directions</a>',
        lat: 52.6240,
        long: -1.1186
    };

    var tiger = {
        info: '<strong>Welford Road Stadium</strong><br>\
					Aylestone Road<br> Leicester, LE2 7TR<br>\
					<a href="https://goo.gl/DyBfPx">Get Directions</a>',
        lat: 52.6233,
        long: -1.136
    };
    var centre = {
        info: '<strong>National Space Centre</strong><br>\
					Exploraion Dr<br> Leicester, LE4 5NS<br>\
					<a href="https://goo.gl/xUi6LD">Get Directions</a>',
        lat: 52.653554,
        long: -1.132008
    };

    var home = {
        info: '<strong>Office Location</strong><br>\
		16 Granby Street<br> Leicester, LE1 1DE<br>\
		<a href="https://goo.gl/GQ1z7V">Get Directions</a>',
        lat: 52.6338,
        long: -1.1301
    };

    var locations = [
        [leicatherdral.info, leicatherdral.lat, leicatherdral.long, 0],
        [richthird.info, richthird.lat, richthird.long, 1],
        [hayclocktower.info, hayclocktower.lat, hayclocktower.long, 2],
        [newMuseum.info, newMuseum.lat, newMuseum.long, 3],
        [powerstaduium.info, powerstaduium.lat, powerstaduium.long, 4],
        [arch.info, arch.lat, arch.long, 5],
        [tiger.info, tiger.lat, tiger.long, 6],
        [centre.info, centre.lat, centre.long, 7],
        [home.info, home.lat, home.long, 8]

    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 13,
        center: new google.maps.LatLng(52.6369, -1.1398),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow({});

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}