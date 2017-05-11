// var request = {
//    placeId: 'place-ID-here' // example: ChIJN1t_tDeuEmsRUsoyG83frY4
//  };
//
//  var service = new google.maps.places.PlacesService(map); // map is your map object
//
//  service.getDetails(request, function(place, status) {
//    if (status == google.maps.places.PlacesServiceStatus.OK) {
//      console.log(place.reviews);
//    }
//  });
// var map;
//       var infowindow;
//
//       function initMap() {
//         var pyrmont = {lat: -33.867, lng: 151.195};
//
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: pyrmont,
//           zoom: 15
//         });
//
//         infowindow = new google.maps.InfoWindow();
//         var service = new google.maps.places.PlacesService(map);
//         service.nearbySearch({
//           location: pyrmont,
//           radius: 500,
//           type: ['store']
//         }, callback);
//       }
//
//       function callback(results, status) {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//           for (var i = 0; i < results.length; i++) {
//             createMarker(results[i]);
//           }
//         }
//       }
//
//       function createMarker(place) {
//         var placeLoc = place.geometry.location;
//         var marker = new google.maps.Marker({
//           map: map,
//           position: place.geometry.location
//         });
//
//         google.maps.event.addListener(marker, 'click', function() {
//           infowindow.setContent(place.name);
//           infowindow.open(map, this);
//         });
//       }

//google maps
var api_key = 'AIzaSyD_e94Cg78rf5AMWIwGLg6BI1adXUoDEgs';
function initMap() {
    var loc = {lat: 32.9159752, lng: -96.8152642};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: loc,
        draggable:true,
        styles: [
            //styles are based on https://snazzymaps.com
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f7f1df"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#d0e3b4"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#fbd3da"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#bde6ab"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffe15f"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#efd151"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "black"
                    }
                ]
            },
            {
                "featureType": "transit.station.airport",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#cfb2db"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#a2daf2"
                    }
                ]
            }
        ]
    });
    var marker = new google.maps.Marker({
        position: loc,
        map: map
    });
}
//Smooth Scroll
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });


(function ($) {
    //slick slider
    $('#team').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        prevArrow:'<i class="fa fa-chevron-right fa-3x"></i>',
        nextArrow: '<i class="fa fa-chevron-left fa-3x"></i>'
    });
    //Read more JS
    $('.tm-text').readmore({
            speed: 75,
            lessLink: '<a href="#">Read less</a>',
            collapsedHeight: 150,
        }
    );
})(jQuery);