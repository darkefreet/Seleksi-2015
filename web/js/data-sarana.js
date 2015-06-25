$(function () {
    // Prepare demo data
    var data = [
                {
                  "name":"Aceh",
                  "value":2.062562161
                },
                {
                  "name":"Sumatera Utara",
                  "value":1.155427846
                },
                {
                  "name":"Sumatera Barat",
                  "value":1.497861833
                },
                {
                  "name":"Riau",
                  "value":0.953349606
                },
                {
                  "name":"Jambi",
                  "value":1.581365116
                },
                {
                  "name":"Sumatera Selatan",
                  "value":1.143563683
                },
                {
                  "name":"Bengkulu",
                  "value":2.920400719
                },
                {
                  "name":"Lampung",
                  "value":1.04095405
                },
                {
                  "name":"Bangka-Belitung",
                  "value":1.348815005
                },
                {
                  "name":"Kepulauan Riau",
                  "value":1.089828683
                },
                {
                  "name":"DKI Jakarta",
                  "value":1.058516389
                },
                {
                  "name":"Jawa Barat",
                  "value":0.702378135
                },
                {
                  "name":"Jawa Tengah",
                  "value":0.786532124
                },
                {
                  "name":"Yogyakarta",
                  "value":1.032540649
                },
                {
                  "name":"Jawa Timur",
                  "value":0.755668373
                },
                {
                  "name":"Banten",
                  "value":0.553038769
                },
                {
                  "name":"Bali",
                  "value":0.879006322
                },
                {
                  "name":"Nusa Tenggara Barat",
                  "value":0.966621128
                },
                {
                  "name":"Nusa Tenggara Timur",
                  "value":1.844645415
                },
                {
                  "name":"Kalimantan Barat",
                  "value":1.562790393
                },
                {
                  "name":"Kalimantan Tengah",
                  "value":2.291951183
                },
                {
                  "name":"Kalimantan Selatan",
                  "value":1.761973145
                },
                {
                  "name":"Kalimantan Timur",
                  "value":1.747748402
                },
                {
                  "name":"Sulawesi Utara",
                  "value":2.100770018
                },
                {
                  "name":"Sulawesi Tengah",
                  "value":1.878551458
                },
                {
                  "name":"Sulawesi Selatan",
                  "value":1.474838875
                },
                {
                  "name":"Sulawesi Tenggara",
                  "value":2.996525106
                },
                {
                  "name":"Gorontalo",
                  "value":2.163120431
                },
                {
                  "name":"Sulawesi Barat",
                  "value":1.993697843
                },
                {
                  "name":"Maluku",
                  "value":2.641006947
                },
                {
                  "name":"Maluku Utara",
                  "value":2.774333943
                },
                {
                  "name":"Irian Jaya Barat",
                  "value":4.1424367
                },
                {
                  "name":"Papua",
                  "value":2.816423206
                }
              ];

    // Initiate the chart
    $('#sarana').highcharts('Map', {
        title : {
            text : 'Rasio Jumlah Puskesmas per 30.000 Penduduk'
        },

        subtitle : {
            text : 'Tahun 2012'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        
        colorAxis: {
          dataClasses: [{
              to: 1
          }, {
              from: 1
          }]
        },

        series : [{
            data : data,
            mapData: Highcharts.maps['countries/id/id-all'],
            //tambahan
            allowPointSelect: true,
            cursor: 'pointer',
            //end of tambahan
            joinBy: 'name',
            name: 'Sarana Kesehatan',
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