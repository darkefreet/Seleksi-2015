$(function () {
    // Prepare demo data
    var data = [
                {
                  "name":"Aceh",
                  "value":309
                },
                {
                  "name":"Sumatera Utara",
                  "value":500
                },
                {
                  "name":"Sumatera Barat",
                  "value":242
                },
                {
                  "name":"Riau",
                  "value":176
                },
                {
                  "name":"Jambi",
                  "value":163
                },
                {
                  "name":"Sumatera Selatan",
                  "value":284
                },
                {
                  "name":"Bengkulu",
                  "value":167
                },
                {
                  "name":"Lampung",
                  "value":264
                },
                {
                  "name":"Kepulauan Bangka Belitung",
                  "value":55
                },
                {
                  "name":"Kepulauan Riau",
                  "value":61
                },
                {
                  "name":"Jakarta Raya",
                  "value":339
                },
                {
                  "name":"Jawa Barat",
                  "value":1008
                },
                {
                  "name":"Jawa Tengah",
                  "value":849
                },
                {
                  "name":"Yogyakarta",
                  "value":119
                },
                {
                  "name":"Jawa Timur",
                  "value":944
                },
                {
                  "name":"Banten",
                  "value":196
                },
                {
                  "name":"Bali",
                  "value":114
                },
                {
                  "name":"Nusa Tenggara Barat",
                  "value":145
                },
                {
                  "name":"Nusa Tenggara Timur",
                  "value":288
                },
                {
                  "name":"Kalimantan Barat",
                  "value":229
                },
                {
                  "name":"Kalimantan Tengah",
                  "value":169
                },
                {
                  "name":"Kalimantan Selatan",
                  "value":213
                },
                {
                  "name":"Kalimantan Timur",
                  "value":207
                },
                {
                  "name":"Sulawesi Utara",
                  "value":159
                },
                {
                  "name":"Sulawesi Tengah",
                  "value":165
                },
                {
                  "name":"Sulawesi Selatan",
                  "value":395
                },
                {
                  "name":"Sulawesi Tenggara",
                  "value":223
                },
                {
                  "name":"Gorontalo",
                  "value":75
                },
                {
                  "name":"Sulawesi Barat",
                  "value":77
                },
                {
                  "name":"Maluku",
                  "value":135
                },
                {
                  "name":"Maluku Utara",
                  "value":96
                },
                {
                  "name":"Irian Jaya Barat",
                  "value":105
                },
                {
                  "name":"Papua",
                  "value":266
                }
            ];

    // Initiate the chart
    $('#sarana').highcharts('Map', {

        title : {
            text : 'Jumlah Sarana Kesehatan Per Provinsi'
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
            min: 0
        },

        tooltip: {
            footerFormat: '<span style="font-size: 10px">(Click for details)</span>'
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