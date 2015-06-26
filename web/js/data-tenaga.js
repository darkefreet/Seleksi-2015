$(function () {
    // Prepare demo data
    var data = [
      {
        "name":"Aceh",
        "value":1.843401025
      },
      {
        "name":"Sumatera Utara",
        "value":1.696168077
      },
      {
        "name":"Sumatera Barat",
        "value":1.794958395
      },
      {
        "name":"Riau",
        "value":1.445371894
      },
      {
        "name":"Jambi",
        "value":1.256360629
      },
      {
        "name":"Sumatera Selatan",
        "value":0.24763791
      },
      {
        "name":"Bengkulu",
        "value":1.463114931
      },
      {
        "name":"Lampung",
        "value":0.805030752
      },
      {
        "name":"Bangka-Belitung",
        "value":1.226195459
      },
      {
        "name":"Kepulauan Riau",
        "value":2.283875955
      },
      {
        "name":"Jakarta Raya",
        "value":1.878164035
      },
      {
        "name":"Jawa Barat",
        "value":0.596231704
      },
      {
        "name":"Jawa Tengah",
        "value":0.957302546
      },
      {
        "name":"Yogyakarta",
        "value":3.456263516
      },
      {
        "name":"Jawa Timur",
        "value":1.092143592
      },
      {
        "name":"Banten",
        "value":0.396438506
      },
      {
        "name":"Bali",
        "value":2.552202566
      },
      {
        "name":"Nusa Tenggara Barat",
        "value":0.794407019
      },
      {
        "name":"Nusa Tenggara Timur",
        "value":0.761129734
      },
      {
        "name":"Kalimantan Barat",
        "value":1.030486242
      },
      {
        "name":"Kalimantan Tengah",
        "value":1.347142904
      },
      {
        "name":"Kalimantan Selatan",
        "value":1.137423979
      },
      {
        "name":"Kalimantan Timur",
        "value":1.965865151
      },
      {
        "name":"Sulawesi Utara",
        "value":1.627326041
      },
      {
        "name":"Sulawesi Tengah",
        "value":0.941173256
      },
      {
        "name":"Sulawesi Selatan",
        "value":0.961445596
      },
      {
        "name":"Sulawesi Tenggara",
        "value":0.716657723
      },
      {
        "name":"Gorontalo",
        "value":1.129629558
      },
      {
        "name":"Sulawesi Barat",
        "value":1.173778817
      },
      {
        "name":"Maluku",
        "value":1.571562159
      },
      {
        "name":"Maluku Utara",
        "value":1.363084212
      },
      {
        "name":"Irian Jaya Barat",
        "value":1.8016312
      },
      {
        "name":"Papua",
        "value":0.529402858
      }
    ];

    // Initiate the chart
    $('#tenaga').highcharts('Map', {

        title : {
            text : 'Rasio Jumlah Tenaga Medis per 5000 penduduk'
        },

        subtitle : {
            text : 'Tahun sekian'
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
            name: 'Tenaga Kesehatan Medis',
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