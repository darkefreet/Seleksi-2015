$(function () {

    // Prepare demo data
    var data =
    [
      {
        "name":"Aceh",
        "value":2.345454
      },
      {
        "name":"Sumatera Utara",
        "value":2.628829
      },
      {
        "name":"Sumatera Barat",
        "value":2.25
      },
      {
        "name":"Riau",
        "value":2.79227
      },
      {
        "name":"Jambi",
        "value":1.920455
      },
      {
        "name":"Sumatera Selatan",
        "value":1.444795
      },
      {
        "name":"Bengkulu",
        "value":1.426966
      },
      {
        "name":"Lampung",
        "value":1.876812
      },
      {
        "name":"Bangka-Belitung",
        "value":2.333333
      },
      {
        "name":"Kepulauan Riau",
        "value":4.666667
      },
      {
        "name":"Jakarta Raya",
        "value":1.897059
      },
      {
        "name":"Jawa Barat",
        "value":1.805927
      },
      {
        "name":"Jawa Tengah",
        "value":2.211913
      },
      {
        "name":"Yogyakarta",
        "value":3.016529
      },
      {
        "name":"Jawa Timur",
        "value":1.909375
      },
      {
        "name":"Banten",
        "value":2.083333
      },
      {
        "name":"Bali",
        "value":2.711864
      },
      {
        "name":"Nusa Tenggara Barat",
        "value":1.617834
      },
      {
        "name":"Nusa Tenggara Timur",
        "value":1.060172
      },
      {
        "name":"Kalimantan Barat",
        "value":1.324895
      },
      {
        "name":"Kalimantan Tengah",
        "value":1.442105
      },
      {
        "name":"Kalimantan Selatan",
        "value":1.973451
      },
      {
        "name":"Kalimantan Timur",
        "value":2.207373
      },
      {
        "name":"Sulawesi Utara",
        "value":2.706215
      },
      {
        "name":"Sulawesi Tengah",
        "value":1.386364
      },
      {
        "name":"Sulawesi Selatan",
        "value":1.623529
      },
      {
        "name":"Sulawesi Tenggara",
        "value":1.027132
      },
      {
        "name":"Gorontalo",
        "value":1.390805
      },
      {
        "name":"Sulawesi Barat",
        "value":1.681319
      },
      {
        "name":"Maluku",
        "value":1.230337
      },
      {
        "name":"Maluku Utara",
        "value":1.218487
      },
      {
        "name":"Irian Jaya Barat",
        "value":0.4765625
      },
      {
        "name":"Papua",
        "value":1.031496
      }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title : {
            text : 'Rasio Dokter Per Puskesmas'
        },

        subtitle : {
            text : 'Source map: <a href="http://code.highcharts.com/mapdata/countries/id/id-all.js">Indonesia</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/id/id-all'],
            joinBy: 'name',
            name: 'Rasio',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});