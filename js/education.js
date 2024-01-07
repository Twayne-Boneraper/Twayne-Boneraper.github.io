


window.addEventListener("load", function () {

    if (document.getElementById("myearth2")) {
        var myearth2 = new Earth("myearth2", {
            location: { lat: 37.09024, lng: -95.712891 },
            light: 'sun',
            lightAmbience: 0.58,
            lightIntensity: 0.6,
            shininess: 0.3,
            sunDirection: { x: -0.4, y: 0 },
            mapLandColor: '#FFFFFF',
            mapSeaColor: 'RGBA(92, 141, 254, 0.6)',
            innerOpacity: 0.4,
            transparent: true,
            autoRotate: true,
            autoRotateDelay: 0
        });
    }
    if (document.getElementById("myearth")) {
    var myearth = new Earth("myearth", {
        location: { lat: 37.09024, lng: -95.712891 },
        light: 'sun',
        lightAmbience: 0.58,
        lightIntensity: 0.6,
        shininess: 0.3,
        sunDirection: { x: -0.4, y: 0 },
        mapLandColor: '#23B14D',
        mapSeaColor: 'RGBA(92, 141, 254, 0.6)',
        mapBorderColor: '#FFFFFF',
        mapBorderWidth: 0.6,
        innerOpacity: 0.4,
        transparent: true,
        autoRotate: true,
        autoRotateDelay: 0
    });

    var locations = [
        {
            name: "ANHUI ZUPONT IMPORT & EXPORT CO. LTD.",

            coords: { lat: 31.52, lng: 117.17 }
        },

        {
            name: "Bangladesh",
            count: "3",
            coords: { lat: 23.684994, lng: 90.356331 }
        },

        {
            name: "Chile",
            count: "29",
            coords: { lat: -35.675147, lng: -71.542969 }
        },
        
        {
            name: "Colombia",
            count: "50",
            coords: { lat: 4.570868, lng: -74.297333 }
        },
        {
            name: "Costa Rica",
            count: "1",
            coords: { lat: 9.748917, lng: -83.753428 }
        },

        {
            name: "Egypt",
            count: "1",
            coords: { lat: 26.820553, lng: 30.802498 }
        },
     

 
        {
            name: "Germany",
            count: "35",
            coords: { lat: 51.165691, lng: 10.451526 }
        },


  
        {
            name: "Indonesia",
            count: "24",
            coords: { lat: -0.789275, lng: 113.921327 }
        },


        {
            name: "Jordan",
            count: "2",
            coords: { lat: 30.585164, lng: 36.238414 }
        },
        {
            name: "Kazakhstan",
            count: "1",
            coords: { lat: 48.019573, lng: 66.923684 }
        },
        
        {
            name: "Madagascar",
            count: "3",
            coords: { lat: -18.766947, lng: 46.869107 }
        },

        {
            name: "Mauritius",
            count: "3",
            coords: { lat: -20.348404, lng: 57.552152 }
        },
        
        {
            name: "Myanmar",
            count: "1",
            coords: { lat: 21.913965, lng: 95.956223 }
        },
        {
            name: "Nepal",
            count: "1",
            coords: { lat: 28.394857, lng: 84.124008 }
        },
        {
            name: "Netherlands",
            count: "32",
            coords: { lat: 52.132633, lng: 5.291266 }
        },
  

        {
            name: "Pakistan",
            count: "5",
            coords: { lat: 30.375321, lng: 69.345116 }
        },
        {
            name: "Panama",
            count: "1",
            coords: { lat: 8.537981, lng: -80.782127 }
        },
        {
            name: "Peru",
            count: "4",
            coords: { lat: -9.189967, lng: -75.015152 }
        },
        {
            name: "Philippines",
            count: "7",
            coords: { lat: 12.879721, lng: 121.774017 }
        },
     
        {
            name: "Qatar",
            count: "1",
            coords: { lat: 25.354826, lng: 51.183884 }
        },
 
        {
            name: "Russia",
            count: "43",
            coords: { lat: 61.52401, lng: 105.318756 }
        },



        {
            name: "Turkey",
            count: "17",
            coords: { lat: 38.963745, lng: 35.243322 }
        },

    ];

    var myoverlay = myearth.addOverlay({
        className: 'countryOverlay',
        depthScale: 0.5,
        visible: false
    });

    for (var l = 0; l < locations.length; l++) {

        var location = locations[l];
        var mymarker = myearth.addMarker({
            location: location.coords,
            mesh: ["Flag3", "Needle"],
            color: "#b721ff",
            flatShading: true,
            castShadow: false,
            hotspot: true,
            content: '<strong>' + location.name + '</strong><span>'
        });
        mymarker.addEventListener('mouseover', function () {
            myoverlay.location = this.location;
            myoverlay.content = this.content;
            myoverlay.visible = true;
            this.color = "#FFFF00";
        });
        mymarker.addEventListener('mouseout', function () {
            myoverlay.visible = false;
            this.color = "#b721ff";
        });
        }

    }


});